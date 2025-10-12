import { faker } from '@faker-js/faker';
import * as argon2 from 'argon2';
import {
  BaseUser,
  CoinsPackage,
  PrismaClient,
  TrainingTimeSlot,
  TrainingType,
  UserRole,
} from '@velue/shared-data-access';
import { COINS_PACKAGES, TRAINING_SESSION } from '@velue/shared-constants';

const prisma = new PrismaClient();

// TEST ACCOUNT PASSWORDS - Used for development/testing only
const TEST_PASSWORDS = {
  customer: 'Customer2024!',
  trainer: 'Trainer2024!',
  admin: 'Admin2024!',
} as const;

function generateStrongPassword(length = 12): string {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const allChars = lowercase + uppercase + numbers + symbols;

  let password = '';

  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  for (let i = 4; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}

function generateTestPassword(role: string): string {
  return TEST_PASSWORDS[role as keyof typeof TEST_PASSWORDS] || generateStrongPassword();
}

async function main(): Promise<void> {
  console.log('🌱 Starting database seeding...');

  await clearDatabase();
  const trainingTypes = Object.values(TrainingType);
  const customers = await createCustomers(50, trainingTypes);
  const trainers = await createTrainers(7, trainingTypes);
  const admins = await createAdmins(3);
  const coinsPackages = await createCoinsPackages();
  const sessionCount = await createTrainingSessions(trainers);
  const bookingCount = await createRandomBookings(customers);
  console.log('🎉 Database seeding completed!');
  console.log(
    `📊 Summary: ${customers.length} customers, ${trainers.length} trainers, ${admins.length} admins, ${coinsPackages.length} coins packages, ${sessionCount} training sessions, ${bookingCount} bookings`,
  );
  console.log('🔑 Test accounts:');
  console.log(`   Customer: test-customer@velue.de / ${TEST_PASSWORDS.customer}`);
  console.log(`   Trainer:  test-trainer@velue.de  / ${TEST_PASSWORDS.trainer}`);
  console.log(`   Admin:    test-admin@velue.de    / ${TEST_PASSWORDS.admin}`);
}

// Delete in order to respect foreign key constraints
async function clearDatabase(): Promise<void> {
  console.log('🧹 Clearing existing data...');
  await prisma.booking.deleteMany({});
  await prisma.trainingSession.deleteMany({});
  await prisma.coinsTransaction.deleteMany({});
  await prisma.coinsPackage.deleteMany({});
  await prisma.customer.deleteMany({});
  await prisma.trainer.deleteMany({});
  await prisma.admin.deleteMany({});
  await prisma.baseUser.deleteMany({});
}

async function createCustomers(customerCount: number, trainingTypes: TrainingType[]): Promise<BaseUser[]> {
  console.log(`Creating ${customerCount} customers...`);
  const customers = [];

  const testCustomerPassword = await argon2.hash(generateTestPassword('customer'));
  const testCustomerUser = await prisma.baseUser.create({
    data: {
      firstName: 'Test',
      lastName: 'Customer',
      email: 'test-customer@velue.de',
      password: testCustomerPassword,
      birthDate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
      phone: faker.phone.number(),
      address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
      role: UserRole.CUSTOMER,
    },
  });

  await prisma.customer.create({
    data: {
      userId: testCustomerUser.id,
      coins: 100, // Test account starts with coins
      preferredTrainingTypes: faker.helpers.arrayElements(trainingTypes, {
        min: 1,
        max: 2,
      }),
      emergencyContact: faker.phone.number(),
    },
  });
  customers.push(testCustomerUser);

  for (let i = 0; i < customerCount - 1; i++) {
    const hashedPassword = await argon2.hash(generateStrongPassword());
    const user = await prisma.baseUser.create({
      data: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: hashedPassword,
        birthDate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        phone: faker.phone.number(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
        role: UserRole.CUSTOMER,
      },
    });

    await prisma.customer.create({
      data: {
        userId: user.id,
        coins: 0,
        preferredTrainingTypes: faker.helpers.arrayElements(trainingTypes, {
          min: 1,
          max: 2,
        }),
        emergencyContact: faker.phone.number(),
      },
    });
    customers.push(user);
  }
  console.log(`✅ Created ${customers.length} customers`);
  return customers;
}

async function createTrainers(trainerCount: number, trainingTypes: TrainingType[]): Promise<BaseUser[]> {
  console.log(`Creating ${trainerCount} trainers...`);
  const trainers = [];

  const testTrainerPassword = await argon2.hash(generateTestPassword('trainer'));
  const testTrainerUser = await prisma.baseUser.create({
    data: {
      firstName: 'Test',
      lastName: 'Trainer',
      email: 'test-trainer@velue.de',
      password: testTrainerPassword,
      birthDate: faker.date.birthdate({ min: 25, max: 45, mode: 'age' }),
      phone: faker.phone.number(),
      address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
      role: UserRole.TRAINER,
    },
  });

  await prisma.trainer.create({
    data: {
      userId: testTrainerUser.id,
      certification: 'Spinning Certified',
      specialization: faker.helpers.arrayElements(trainingTypes, {
        min: 1,
        max: 3,
      }),
    },
  });
  trainers.push(testTrainerUser);

  for (let i = 0; i < trainerCount - 1; i++) {
    const hashedPassword = await argon2.hash(generateStrongPassword());
    const trainerUser = await prisma.baseUser.create({
      data: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: hashedPassword,
        birthDate: faker.date.birthdate({ min: 25, max: 45, mode: 'age' }),
        phone: faker.phone.number(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
        role: UserRole.TRAINER,
      },
    });

    await prisma.trainer.create({
      data: {
        userId: trainerUser.id,
        certification: faker.helpers.arrayElement([
          'ACE Certified',
          'NASM Certified',
          'ACSM Certified',
          'Spinning Certified',
        ]),
        specialization: faker.helpers.arrayElements(trainingTypes, {
          min: 1,
          max: 3,
        }),
      },
    });
    trainers.push(trainerUser);
  }
  console.log(`✅ Created ${trainers.length} trainers`);
  return trainers;
}

async function createAdmins(adminCount: number): Promise<BaseUser[]> {
  console.log(`Creating ${adminCount} admins...`);
  const admins = [];

  const testAdminPassword = await argon2.hash(generateTestPassword('admin'));
  const testAdminUser = await prisma.baseUser.create({
    data: {
      firstName: 'Test',
      lastName: 'Admin',
      email: 'test-admin@velue.de',
      password: testAdminPassword,
      birthDate: faker.date.birthdate({ min: 30, max: 55, mode: 'age' }),
      phone: faker.phone.number(),
      address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
      role: UserRole.ADMIN,
    },
  });

  await prisma.admin.create({
    data: {
      userId: testAdminUser.id,
    },
  });
  admins.push(testAdminUser);

  for (let i = 0; i < adminCount - 1; i++) {
    const hashedPassword = await argon2.hash(generateStrongPassword());
    const adminUser = await prisma.baseUser.create({
      data: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: hashedPassword,
        birthDate: faker.date.birthdate({ min: 30, max: 55, mode: 'age' }),
        phone: faker.phone.number(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
        role: UserRole.ADMIN,
      },
    });

    await prisma.admin.create({
      data: {
        userId: adminUser.id,
      },
    });
    admins.push(adminUser);
  }
  console.log(`✅ Created ${admins.length} admins`);
  return admins;
}

async function createTrainingSessions(trainers: BaseUser[]): Promise<number> {
  console.log('Creating training sessions for January 2026...');

  // 7 daily time slots with training types
  const dailySchedule = [
    { time: TrainingTimeSlot.SLOT_0900, type: TrainingType.SPINNING_BEGINNER },
    {
      time: TrainingTimeSlot.SLOT_1030,
      type: TrainingType.SPINNING_INTERMEDIATE,
    },
    { time: TrainingTimeSlot.SLOT_1200, type: TrainingType.SPINNING_ADVANCED },
    { time: TrainingTimeSlot.SLOT_1600, type: TrainingType.SPINNING_HIIT },
    { time: TrainingTimeSlot.SLOT_1730, type: TrainingType.SPINNING_ENDURANCE },
    { time: TrainingTimeSlot.SLOT_1900, type: TrainingType.SPINNING_BEGINNER },
    {
      time: TrainingTimeSlot.SLOT_2030,
      type: TrainingType.SPINNING_INTERMEDIATE,
    },
  ];

  let sessionCount = 0;

  // Generate sessions for January 2026
  for (let day = 1; day <= 31; day++) {
    const date = new Date(`2026-01-${String(day).padStart(2, '0')}T00:00:00.000Z`);

    for (const schedule of dailySchedule) {
      const randomTrainer = trainers[Math.floor(Math.random() * trainers.length)];

      await prisma.trainingSession.create({
        data: {
          trainingType: schedule.type,
          trainerId: randomTrainer.id,
          date: date,
          startTime: schedule.time,
          durationMinutes: TRAINING_SESSION.durationMinutes,
          maxParticipants: TRAINING_SESSION.maxParticipants,
          coinsRequired: TRAINING_SESSION.coinsRequired,
          qrCode: `QR-${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(
            2,
            '0',
          )}-${schedule.time}`,
        },
      });
      sessionCount++;
    }
  }

  console.log(`✅ Created ${sessionCount} training sessions for January 2026`);
  return sessionCount;
}

async function createCoinsPackages(): Promise<CoinsPackage[]> {
  console.log('Creating coins packages...');
  const coinsPackages = await Promise.all(
    COINS_PACKAGES.map(packageData =>
      prisma.coinsPackage.create({
        data: {
          name: packageData.name,
          coins: packageData.coins,
          price: packageData.price,
          discount: packageData.discount || 0,
          description: packageData.description,
          stripePriceId: packageData.stripePriceId,
          isActive: true,
        },
      }),
    ),
  );
  console.log(`✅ Created ${coinsPackages.length} coins packages`);
  return coinsPackages;
}

async function createRandomBookings(customers: BaseUser[]): Promise<number> {
  console.log('Creating randomized bookings for training sessions...');

  // Get all training sessions
  const trainingSessions = await prisma.trainingSession.findMany();
  let bookingCount = 0;

  for (const session of trainingSessions) {
    // Randomly determine how many spots to book (0% to 100% capacity)
    const maxParticipants = session.maxParticipants;
    const occupancyRate = Math.random(); // 0 to 1
    const spotsToBook = Math.floor(occupancyRate * maxParticipants);

    if (spotsToBook > 0) {
      // Select random customers for this session
      const shuffledCustomers = [...customers].sort(() => Math.random() - 0.5);
      const selectedCustomers = shuffledCustomers.slice(0, spotsToBook);

      for (const customer of selectedCustomers) {
        // Get the customer record to access userId correctly
        const customerRecord = await prisma.customer.findUnique({
          where: { userId: customer.id },
        });

        if (customerRecord) {
          await prisma.booking.create({
            data: {
              userId: customerRecord.userId,
              trainingSessionId: session.id,
              status: 'CONFIRMED',
              coinsUsed: session.coinsRequired,
              bookedAt: faker.date.between({
                from: new Date('2026-12-01'),
                to: new Date('2026-12-31'),
              }),
            },
          });
          bookingCount++;
        }
      }
    }
  }

  console.log(`✅ Created ${bookingCount} randomized bookings`);
  return bookingCount;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
