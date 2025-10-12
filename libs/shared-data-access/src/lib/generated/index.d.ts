
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BaseUser
 * 
 */
export type BaseUser = $Result.DefaultSelection<Prisma.$BaseUserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model UserConsent
 * 
 */
export type UserConsent = $Result.DefaultSelection<Prisma.$UserConsentPayload>
/**
 * Model Trainer
 * 
 */
export type Trainer = $Result.DefaultSelection<Prisma.$TrainerPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model TrainingSession
 * 
 */
export type TrainingSession = $Result.DefaultSelection<Prisma.$TrainingSessionPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model CoinsTransaction
 * 
 */
export type CoinsTransaction = $Result.DefaultSelection<Prisma.$CoinsTransactionPayload>
/**
 * Model CoinsPurchase
 * 
 */
export type CoinsPurchase = $Result.DefaultSelection<Prisma.$CoinsPurchasePayload>
/**
 * Model CoinsPackage
 * 
 */
export type CoinsPackage = $Result.DefaultSelection<Prisma.$CoinsPackagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  CUSTOMER: 'CUSTOMER',
  TRAINER: 'TRAINER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const TrainingType: {
  SPINNING_BEGINNER: 'SPINNING_BEGINNER',
  SPINNING_INTERMEDIATE: 'SPINNING_INTERMEDIATE',
  SPINNING_ADVANCED: 'SPINNING_ADVANCED',
  SPINNING_HIIT: 'SPINNING_HIIT',
  SPINNING_ENDURANCE: 'SPINNING_ENDURANCE'
};

export type TrainingType = (typeof TrainingType)[keyof typeof TrainingType]


export const TrainingStatus: {
  SCHEDULED: 'SCHEDULED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type TrainingStatus = (typeof TrainingStatus)[keyof typeof TrainingStatus]


export const TrainingTimeSlot: {
  SLOT_0900: 'SLOT_0900',
  SLOT_1030: 'SLOT_1030',
  SLOT_1200: 'SLOT_1200',
  SLOT_1600: 'SLOT_1600',
  SLOT_1730: 'SLOT_1730',
  SLOT_1900: 'SLOT_1900',
  SLOT_2030: 'SLOT_2030'
};

export type TrainingTimeSlot = (typeof TrainingTimeSlot)[keyof typeof TrainingTimeSlot]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW',
  ATTENDED: 'ATTENDED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const CoinsTransactionType: {
  PURCHASE: 'PURCHASE',
  BOOKING_CHARGE: 'BOOKING_CHARGE',
  BOOKING_REFUND: 'BOOKING_REFUND',
  ADMIN_ADJUSTMENT: 'ADMIN_ADJUSTMENT',
  PROMOTIONAL: 'PROMOTIONAL'
};

export type CoinsTransactionType = (typeof CoinsTransactionType)[keyof typeof CoinsTransactionType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const ConsentType: {
  TERMS_OF_SERVICE: 'TERMS_OF_SERVICE',
  PRIVACY_POLICY: 'PRIVACY_POLICY',
  MARKETING_COMMUNICATIONS: 'MARKETING_COMMUNICATIONS'
};

export type ConsentType = (typeof ConsentType)[keyof typeof ConsentType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type TrainingType = $Enums.TrainingType

export const TrainingType: typeof $Enums.TrainingType

export type TrainingStatus = $Enums.TrainingStatus

export const TrainingStatus: typeof $Enums.TrainingStatus

export type TrainingTimeSlot = $Enums.TrainingTimeSlot

export const TrainingTimeSlot: typeof $Enums.TrainingTimeSlot

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type CoinsTransactionType = $Enums.CoinsTransactionType

export const CoinsTransactionType: typeof $Enums.CoinsTransactionType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type ConsentType = $Enums.ConsentType

export const ConsentType: typeof $Enums.ConsentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BaseUsers
 * const baseUsers = await prisma.baseUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BaseUsers
   * const baseUsers = await prisma.baseUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.baseUser`: Exposes CRUD operations for the **BaseUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BaseUsers
    * const baseUsers = await prisma.baseUser.findMany()
    * ```
    */
  get baseUser(): Prisma.BaseUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userConsent`: Exposes CRUD operations for the **UserConsent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserConsents
    * const userConsents = await prisma.userConsent.findMany()
    * ```
    */
  get userConsent(): Prisma.UserConsentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainer`: Exposes CRUD operations for the **Trainer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trainers
    * const trainers = await prisma.trainer.findMany()
    * ```
    */
  get trainer(): Prisma.TrainerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainingSession`: Exposes CRUD operations for the **TrainingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainingSessions
    * const trainingSessions = await prisma.trainingSession.findMany()
    * ```
    */
  get trainingSession(): Prisma.TrainingSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coinsTransaction`: Exposes CRUD operations for the **CoinsTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoinsTransactions
    * const coinsTransactions = await prisma.coinsTransaction.findMany()
    * ```
    */
  get coinsTransaction(): Prisma.CoinsTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coinsPurchase`: Exposes CRUD operations for the **CoinsPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoinsPurchases
    * const coinsPurchases = await prisma.coinsPurchase.findMany()
    * ```
    */
  get coinsPurchase(): Prisma.CoinsPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coinsPackage`: Exposes CRUD operations for the **CoinsPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoinsPackages
    * const coinsPackages = await prisma.coinsPackage.findMany()
    * ```
    */
  get coinsPackage(): Prisma.CoinsPackageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BaseUser: 'BaseUser',
    Customer: 'Customer',
    UserConsent: 'UserConsent',
    Trainer: 'Trainer',
    Admin: 'Admin',
    TrainingSession: 'TrainingSession',
    Booking: 'Booking',
    CoinsTransaction: 'CoinsTransaction',
    CoinsPurchase: 'CoinsPurchase',
    CoinsPackage: 'CoinsPackage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "baseUser" | "customer" | "userConsent" | "trainer" | "admin" | "trainingSession" | "booking" | "coinsTransaction" | "coinsPurchase" | "coinsPackage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BaseUser: {
        payload: Prisma.$BaseUserPayload<ExtArgs>
        fields: Prisma.BaseUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaseUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaseUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload>
          }
          findFirst: {
            args: Prisma.BaseUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaseUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload>
          }
          findMany: {
            args: Prisma.BaseUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload>[]
          }
          create: {
            args: Prisma.BaseUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload>
          }
          createMany: {
            args: Prisma.BaseUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BaseUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload>[]
          }
          delete: {
            args: Prisma.BaseUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload>
          }
          update: {
            args: Prisma.BaseUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload>
          }
          deleteMany: {
            args: Prisma.BaseUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaseUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BaseUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload>[]
          }
          upsert: {
            args: Prisma.BaseUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseUserPayload>
          }
          aggregate: {
            args: Prisma.BaseUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaseUser>
          }
          groupBy: {
            args: Prisma.BaseUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaseUserCountArgs<ExtArgs>
            result: $Utils.Optional<BaseUserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      UserConsent: {
        payload: Prisma.$UserConsentPayload<ExtArgs>
        fields: Prisma.UserConsentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserConsentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserConsentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          findFirst: {
            args: Prisma.UserConsentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserConsentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          findMany: {
            args: Prisma.UserConsentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>[]
          }
          create: {
            args: Prisma.UserConsentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          createMany: {
            args: Prisma.UserConsentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserConsentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>[]
          }
          delete: {
            args: Prisma.UserConsentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          update: {
            args: Prisma.UserConsentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          deleteMany: {
            args: Prisma.UserConsentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserConsentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserConsentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>[]
          }
          upsert: {
            args: Prisma.UserConsentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserConsentPayload>
          }
          aggregate: {
            args: Prisma.UserConsentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserConsent>
          }
          groupBy: {
            args: Prisma.UserConsentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserConsentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserConsentCountArgs<ExtArgs>
            result: $Utils.Optional<UserConsentCountAggregateOutputType> | number
          }
        }
      }
      Trainer: {
        payload: Prisma.$TrainerPayload<ExtArgs>
        fields: Prisma.TrainerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          findFirst: {
            args: Prisma.TrainerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          findMany: {
            args: Prisma.TrainerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>[]
          }
          create: {
            args: Prisma.TrainerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          createMany: {
            args: Prisma.TrainerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>[]
          }
          delete: {
            args: Prisma.TrainerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          update: {
            args: Prisma.TrainerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          deleteMany: {
            args: Prisma.TrainerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>[]
          }
          upsert: {
            args: Prisma.TrainerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerPayload>
          }
          aggregate: {
            args: Prisma.TrainerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainer>
          }
          groupBy: {
            args: Prisma.TrainerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainerCountArgs<ExtArgs>
            result: $Utils.Optional<TrainerCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      TrainingSession: {
        payload: Prisma.$TrainingSessionPayload<ExtArgs>
        fields: Prisma.TrainingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          findFirst: {
            args: Prisma.TrainingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          findMany: {
            args: Prisma.TrainingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>[]
          }
          create: {
            args: Prisma.TrainingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          createMany: {
            args: Prisma.TrainingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>[]
          }
          delete: {
            args: Prisma.TrainingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          update: {
            args: Prisma.TrainingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          deleteMany: {
            args: Prisma.TrainingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainingSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>[]
          }
          upsert: {
            args: Prisma.TrainingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainingSessionPayload>
          }
          aggregate: {
            args: Prisma.TrainingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainingSession>
          }
          groupBy: {
            args: Prisma.TrainingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TrainingSessionCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      CoinsTransaction: {
        payload: Prisma.$CoinsTransactionPayload<ExtArgs>
        fields: Prisma.CoinsTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoinsTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoinsTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload>
          }
          findFirst: {
            args: Prisma.CoinsTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoinsTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload>
          }
          findMany: {
            args: Prisma.CoinsTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload>[]
          }
          create: {
            args: Prisma.CoinsTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload>
          }
          createMany: {
            args: Prisma.CoinsTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoinsTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload>[]
          }
          delete: {
            args: Prisma.CoinsTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload>
          }
          update: {
            args: Prisma.CoinsTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CoinsTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoinsTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoinsTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload>[]
          }
          upsert: {
            args: Prisma.CoinsTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsTransactionPayload>
          }
          aggregate: {
            args: Prisma.CoinsTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoinsTransaction>
          }
          groupBy: {
            args: Prisma.CoinsTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoinsTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoinsTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CoinsTransactionCountAggregateOutputType> | number
          }
        }
      }
      CoinsPurchase: {
        payload: Prisma.$CoinsPurchasePayload<ExtArgs>
        fields: Prisma.CoinsPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoinsPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoinsPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload>
          }
          findFirst: {
            args: Prisma.CoinsPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoinsPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload>
          }
          findMany: {
            args: Prisma.CoinsPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload>[]
          }
          create: {
            args: Prisma.CoinsPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload>
          }
          createMany: {
            args: Prisma.CoinsPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoinsPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload>[]
          }
          delete: {
            args: Prisma.CoinsPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload>
          }
          update: {
            args: Prisma.CoinsPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload>
          }
          deleteMany: {
            args: Prisma.CoinsPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoinsPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoinsPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload>[]
          }
          upsert: {
            args: Prisma.CoinsPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPurchasePayload>
          }
          aggregate: {
            args: Prisma.CoinsPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoinsPurchase>
          }
          groupBy: {
            args: Prisma.CoinsPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoinsPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoinsPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<CoinsPurchaseCountAggregateOutputType> | number
          }
        }
      }
      CoinsPackage: {
        payload: Prisma.$CoinsPackagePayload<ExtArgs>
        fields: Prisma.CoinsPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoinsPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoinsPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload>
          }
          findFirst: {
            args: Prisma.CoinsPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoinsPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload>
          }
          findMany: {
            args: Prisma.CoinsPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload>[]
          }
          create: {
            args: Prisma.CoinsPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload>
          }
          createMany: {
            args: Prisma.CoinsPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoinsPackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload>[]
          }
          delete: {
            args: Prisma.CoinsPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload>
          }
          update: {
            args: Prisma.CoinsPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload>
          }
          deleteMany: {
            args: Prisma.CoinsPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoinsPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoinsPackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload>[]
          }
          upsert: {
            args: Prisma.CoinsPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinsPackagePayload>
          }
          aggregate: {
            args: Prisma.CoinsPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoinsPackage>
          }
          groupBy: {
            args: Prisma.CoinsPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoinsPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoinsPackageCountArgs<ExtArgs>
            result: $Utils.Optional<CoinsPackageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    baseUser?: BaseUserOmit
    customer?: CustomerOmit
    userConsent?: UserConsentOmit
    trainer?: TrainerOmit
    admin?: AdminOmit
    trainingSession?: TrainingSessionOmit
    booking?: BookingOmit
    coinsTransaction?: CoinsTransactionOmit
    coinsPurchase?: CoinsPurchaseOmit
    coinsPackage?: CoinsPackageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BaseUserCountOutputType
   */

  export type BaseUserCountOutputType = {
    UserConsent: number
  }

  export type BaseUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserConsent?: boolean | BaseUserCountOutputTypeCountUserConsentArgs
  }

  // Custom InputTypes
  /**
   * BaseUserCountOutputType without action
   */
  export type BaseUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUserCountOutputType
     */
    select?: BaseUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BaseUserCountOutputType without action
   */
  export type BaseUserCountOutputTypeCountUserConsentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserConsentWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    coinsTransactions: number
    bookings: number
    coinsPurchases: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coinsTransactions?: boolean | CustomerCountOutputTypeCountCoinsTransactionsArgs
    bookings?: boolean | CustomerCountOutputTypeCountBookingsArgs
    coinsPurchases?: boolean | CustomerCountOutputTypeCountCoinsPurchasesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCoinsTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinsTransactionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCoinsPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinsPurchaseWhereInput
  }


  /**
   * Count Type TrainerCountOutputType
   */

  export type TrainerCountOutputType = {
    trainingSessions: number
  }

  export type TrainerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingSessions?: boolean | TrainerCountOutputTypeCountTrainingSessionsArgs
  }

  // Custom InputTypes
  /**
   * TrainerCountOutputType without action
   */
  export type TrainerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerCountOutputType
     */
    select?: TrainerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrainerCountOutputType without action
   */
  export type TrainerCountOutputTypeCountTrainingSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingSessionWhereInput
  }


  /**
   * Count Type TrainingSessionCountOutputType
   */

  export type TrainingSessionCountOutputType = {
    bookings: number
  }

  export type TrainingSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | TrainingSessionCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * TrainingSessionCountOutputType without action
   */
  export type TrainingSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSessionCountOutputType
     */
    select?: TrainingSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrainingSessionCountOutputType without action
   */
  export type TrainingSessionCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    coinsTransactions: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coinsTransactions?: boolean | BookingCountOutputTypeCountCoinsTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountCoinsTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinsTransactionWhereInput
  }


  /**
   * Count Type CoinsPackageCountOutputType
   */

  export type CoinsPackageCountOutputType = {
    coinsPurchases: number
  }

  export type CoinsPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coinsPurchases?: boolean | CoinsPackageCountOutputTypeCountCoinsPurchasesArgs
  }

  // Custom InputTypes
  /**
   * CoinsPackageCountOutputType without action
   */
  export type CoinsPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackageCountOutputType
     */
    select?: CoinsPackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoinsPackageCountOutputType without action
   */
  export type CoinsPackageCountOutputTypeCountCoinsPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinsPurchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BaseUser
   */

  export type AggregateBaseUser = {
    _count: BaseUserCountAggregateOutputType | null
    _min: BaseUserMinAggregateOutputType | null
    _max: BaseUserMaxAggregateOutputType | null
  }

  export type BaseUserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    birthDate: Date | null
    phone: string | null
    address: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    passwordLastChanged: Date | null
    passwordResetToken: string | null
    passwordResetExpiry: Date | null
  }

  export type BaseUserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    birthDate: Date | null
    phone: string | null
    address: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
    passwordLastChanged: Date | null
    passwordResetToken: string | null
    passwordResetExpiry: Date | null
  }

  export type BaseUserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    birthDate: number
    phone: number
    address: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    passwordLastChanged: number
    passwordResetToken: number
    passwordResetExpiry: number
    _all: number
  }


  export type BaseUserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    birthDate?: true
    phone?: true
    address?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    passwordLastChanged?: true
    passwordResetToken?: true
    passwordResetExpiry?: true
  }

  export type BaseUserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    birthDate?: true
    phone?: true
    address?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    passwordLastChanged?: true
    passwordResetToken?: true
    passwordResetExpiry?: true
  }

  export type BaseUserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    birthDate?: true
    phone?: true
    address?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    passwordLastChanged?: true
    passwordResetToken?: true
    passwordResetExpiry?: true
    _all?: true
  }

  export type BaseUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseUser to aggregate.
     */
    where?: BaseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseUsers to fetch.
     */
    orderBy?: BaseUserOrderByWithRelationInput | BaseUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BaseUsers
    **/
    _count?: true | BaseUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseUserMaxAggregateInputType
  }

  export type GetBaseUserAggregateType<T extends BaseUserAggregateArgs> = {
        [P in keyof T & keyof AggregateBaseUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaseUser[P]>
      : GetScalarType<T[P], AggregateBaseUser[P]>
  }




  export type BaseUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseUserWhereInput
    orderBy?: BaseUserOrderByWithAggregationInput | BaseUserOrderByWithAggregationInput[]
    by: BaseUserScalarFieldEnum[] | BaseUserScalarFieldEnum
    having?: BaseUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseUserCountAggregateInputType | true
    _min?: BaseUserMinAggregateInputType
    _max?: BaseUserMaxAggregateInputType
  }

  export type BaseUserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date
    phone: string | null
    address: string | null
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    lastLogin: Date
    passwordLastChanged: Date
    passwordResetToken: string | null
    passwordResetExpiry: Date | null
    _count: BaseUserCountAggregateOutputType | null
    _min: BaseUserMinAggregateOutputType | null
    _max: BaseUserMaxAggregateOutputType | null
  }

  type GetBaseUserGroupByPayload<T extends BaseUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseUserGroupByOutputType[P]>
            : GetScalarType<T[P], BaseUserGroupByOutputType[P]>
        }
      >
    >


  export type BaseUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    birthDate?: boolean
    phone?: boolean
    address?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    passwordLastChanged?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
    customer?: boolean | BaseUser$customerArgs<ExtArgs>
    trainer?: boolean | BaseUser$trainerArgs<ExtArgs>
    admin?: boolean | BaseUser$adminArgs<ExtArgs>
    UserConsent?: boolean | BaseUser$UserConsentArgs<ExtArgs>
    _count?: boolean | BaseUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baseUser"]>

  export type BaseUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    birthDate?: boolean
    phone?: boolean
    address?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    passwordLastChanged?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
  }, ExtArgs["result"]["baseUser"]>

  export type BaseUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    birthDate?: boolean
    phone?: boolean
    address?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    passwordLastChanged?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
  }, ExtArgs["result"]["baseUser"]>

  export type BaseUserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    birthDate?: boolean
    phone?: boolean
    address?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    passwordLastChanged?: boolean
    passwordResetToken?: boolean
    passwordResetExpiry?: boolean
  }

  export type BaseUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "birthDate" | "phone" | "address" | "role" | "isActive" | "createdAt" | "updatedAt" | "lastLogin" | "passwordLastChanged" | "passwordResetToken" | "passwordResetExpiry", ExtArgs["result"]["baseUser"]>
  export type BaseUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | BaseUser$customerArgs<ExtArgs>
    trainer?: boolean | BaseUser$trainerArgs<ExtArgs>
    admin?: boolean | BaseUser$adminArgs<ExtArgs>
    UserConsent?: boolean | BaseUser$UserConsentArgs<ExtArgs>
    _count?: boolean | BaseUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BaseUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BaseUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BaseUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BaseUser"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      trainer: Prisma.$TrainerPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
      UserConsent: Prisma.$UserConsentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      birthDate: Date
      phone: string | null
      address: string | null
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      lastLogin: Date
      passwordLastChanged: Date
      passwordResetToken: string | null
      passwordResetExpiry: Date | null
    }, ExtArgs["result"]["baseUser"]>
    composites: {}
  }

  type BaseUserGetPayload<S extends boolean | null | undefined | BaseUserDefaultArgs> = $Result.GetResult<Prisma.$BaseUserPayload, S>

  type BaseUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BaseUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaseUserCountAggregateInputType | true
    }

  export interface BaseUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BaseUser'], meta: { name: 'BaseUser' } }
    /**
     * Find zero or one BaseUser that matches the filter.
     * @param {BaseUserFindUniqueArgs} args - Arguments to find a BaseUser
     * @example
     * // Get one BaseUser
     * const baseUser = await prisma.baseUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaseUserFindUniqueArgs>(args: SelectSubset<T, BaseUserFindUniqueArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BaseUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BaseUserFindUniqueOrThrowArgs} args - Arguments to find a BaseUser
     * @example
     * // Get one BaseUser
     * const baseUser = await prisma.baseUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaseUserFindUniqueOrThrowArgs>(args: SelectSubset<T, BaseUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BaseUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUserFindFirstArgs} args - Arguments to find a BaseUser
     * @example
     * // Get one BaseUser
     * const baseUser = await prisma.baseUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaseUserFindFirstArgs>(args?: SelectSubset<T, BaseUserFindFirstArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BaseUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUserFindFirstOrThrowArgs} args - Arguments to find a BaseUser
     * @example
     * // Get one BaseUser
     * const baseUser = await prisma.baseUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaseUserFindFirstOrThrowArgs>(args?: SelectSubset<T, BaseUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BaseUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BaseUsers
     * const baseUsers = await prisma.baseUser.findMany()
     * 
     * // Get first 10 BaseUsers
     * const baseUsers = await prisma.baseUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baseUserWithIdOnly = await prisma.baseUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BaseUserFindManyArgs>(args?: SelectSubset<T, BaseUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BaseUser.
     * @param {BaseUserCreateArgs} args - Arguments to create a BaseUser.
     * @example
     * // Create one BaseUser
     * const BaseUser = await prisma.baseUser.create({
     *   data: {
     *     // ... data to create a BaseUser
     *   }
     * })
     * 
     */
    create<T extends BaseUserCreateArgs>(args: SelectSubset<T, BaseUserCreateArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BaseUsers.
     * @param {BaseUserCreateManyArgs} args - Arguments to create many BaseUsers.
     * @example
     * // Create many BaseUsers
     * const baseUser = await prisma.baseUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaseUserCreateManyArgs>(args?: SelectSubset<T, BaseUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BaseUsers and returns the data saved in the database.
     * @param {BaseUserCreateManyAndReturnArgs} args - Arguments to create many BaseUsers.
     * @example
     * // Create many BaseUsers
     * const baseUser = await prisma.baseUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BaseUsers and only return the `id`
     * const baseUserWithIdOnly = await prisma.baseUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BaseUserCreateManyAndReturnArgs>(args?: SelectSubset<T, BaseUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BaseUser.
     * @param {BaseUserDeleteArgs} args - Arguments to delete one BaseUser.
     * @example
     * // Delete one BaseUser
     * const BaseUser = await prisma.baseUser.delete({
     *   where: {
     *     // ... filter to delete one BaseUser
     *   }
     * })
     * 
     */
    delete<T extends BaseUserDeleteArgs>(args: SelectSubset<T, BaseUserDeleteArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BaseUser.
     * @param {BaseUserUpdateArgs} args - Arguments to update one BaseUser.
     * @example
     * // Update one BaseUser
     * const baseUser = await prisma.baseUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaseUserUpdateArgs>(args: SelectSubset<T, BaseUserUpdateArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BaseUsers.
     * @param {BaseUserDeleteManyArgs} args - Arguments to filter BaseUsers to delete.
     * @example
     * // Delete a few BaseUsers
     * const { count } = await prisma.baseUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaseUserDeleteManyArgs>(args?: SelectSubset<T, BaseUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BaseUsers
     * const baseUser = await prisma.baseUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaseUserUpdateManyArgs>(args: SelectSubset<T, BaseUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseUsers and returns the data updated in the database.
     * @param {BaseUserUpdateManyAndReturnArgs} args - Arguments to update many BaseUsers.
     * @example
     * // Update many BaseUsers
     * const baseUser = await prisma.baseUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BaseUsers and only return the `id`
     * const baseUserWithIdOnly = await prisma.baseUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BaseUserUpdateManyAndReturnArgs>(args: SelectSubset<T, BaseUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BaseUser.
     * @param {BaseUserUpsertArgs} args - Arguments to update or create a BaseUser.
     * @example
     * // Update or create a BaseUser
     * const baseUser = await prisma.baseUser.upsert({
     *   create: {
     *     // ... data to create a BaseUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BaseUser we want to update
     *   }
     * })
     */
    upsert<T extends BaseUserUpsertArgs>(args: SelectSubset<T, BaseUserUpsertArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BaseUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUserCountArgs} args - Arguments to filter BaseUsers to count.
     * @example
     * // Count the number of BaseUsers
     * const count = await prisma.baseUser.count({
     *   where: {
     *     // ... the filter for the BaseUsers we want to count
     *   }
     * })
    **/
    count<T extends BaseUserCountArgs>(
      args?: Subset<T, BaseUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BaseUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaseUserAggregateArgs>(args: Subset<T, BaseUserAggregateArgs>): Prisma.PrismaPromise<GetBaseUserAggregateType<T>>

    /**
     * Group by BaseUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BaseUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaseUserGroupByArgs['orderBy'] }
        : { orderBy?: BaseUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BaseUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BaseUser model
   */
  readonly fields: BaseUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BaseUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaseUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends BaseUser$customerArgs<ExtArgs> = {}>(args?: Subset<T, BaseUser$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trainer<T extends BaseUser$trainerArgs<ExtArgs> = {}>(args?: Subset<T, BaseUser$trainerArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends BaseUser$adminArgs<ExtArgs> = {}>(args?: Subset<T, BaseUser$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    UserConsent<T extends BaseUser$UserConsentArgs<ExtArgs> = {}>(args?: Subset<T, BaseUser$UserConsentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BaseUser model
   */
  interface BaseUserFieldRefs {
    readonly id: FieldRef<"BaseUser", 'String'>
    readonly firstName: FieldRef<"BaseUser", 'String'>
    readonly lastName: FieldRef<"BaseUser", 'String'>
    readonly email: FieldRef<"BaseUser", 'String'>
    readonly password: FieldRef<"BaseUser", 'String'>
    readonly birthDate: FieldRef<"BaseUser", 'DateTime'>
    readonly phone: FieldRef<"BaseUser", 'String'>
    readonly address: FieldRef<"BaseUser", 'String'>
    readonly role: FieldRef<"BaseUser", 'UserRole'>
    readonly isActive: FieldRef<"BaseUser", 'Boolean'>
    readonly createdAt: FieldRef<"BaseUser", 'DateTime'>
    readonly updatedAt: FieldRef<"BaseUser", 'DateTime'>
    readonly lastLogin: FieldRef<"BaseUser", 'DateTime'>
    readonly passwordLastChanged: FieldRef<"BaseUser", 'DateTime'>
    readonly passwordResetToken: FieldRef<"BaseUser", 'String'>
    readonly passwordResetExpiry: FieldRef<"BaseUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BaseUser findUnique
   */
  export type BaseUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUserInclude<ExtArgs> | null
    /**
     * Filter, which BaseUser to fetch.
     */
    where: BaseUserWhereUniqueInput
  }

  /**
   * BaseUser findUniqueOrThrow
   */
  export type BaseUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUserInclude<ExtArgs> | null
    /**
     * Filter, which BaseUser to fetch.
     */
    where: BaseUserWhereUniqueInput
  }

  /**
   * BaseUser findFirst
   */
  export type BaseUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUserInclude<ExtArgs> | null
    /**
     * Filter, which BaseUser to fetch.
     */
    where?: BaseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseUsers to fetch.
     */
    orderBy?: BaseUserOrderByWithRelationInput | BaseUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseUsers.
     */
    cursor?: BaseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseUsers.
     */
    distinct?: BaseUserScalarFieldEnum | BaseUserScalarFieldEnum[]
  }

  /**
   * BaseUser findFirstOrThrow
   */
  export type BaseUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUserInclude<ExtArgs> | null
    /**
     * Filter, which BaseUser to fetch.
     */
    where?: BaseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseUsers to fetch.
     */
    orderBy?: BaseUserOrderByWithRelationInput | BaseUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseUsers.
     */
    cursor?: BaseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseUsers.
     */
    distinct?: BaseUserScalarFieldEnum | BaseUserScalarFieldEnum[]
  }

  /**
   * BaseUser findMany
   */
  export type BaseUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUserInclude<ExtArgs> | null
    /**
     * Filter, which BaseUsers to fetch.
     */
    where?: BaseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseUsers to fetch.
     */
    orderBy?: BaseUserOrderByWithRelationInput | BaseUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BaseUsers.
     */
    cursor?: BaseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseUsers.
     */
    skip?: number
    distinct?: BaseUserScalarFieldEnum | BaseUserScalarFieldEnum[]
  }

  /**
   * BaseUser create
   */
  export type BaseUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUserInclude<ExtArgs> | null
    /**
     * The data needed to create a BaseUser.
     */
    data: XOR<BaseUserCreateInput, BaseUserUncheckedCreateInput>
  }

  /**
   * BaseUser createMany
   */
  export type BaseUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BaseUsers.
     */
    data: BaseUserCreateManyInput | BaseUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BaseUser createManyAndReturn
   */
  export type BaseUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * The data used to create many BaseUsers.
     */
    data: BaseUserCreateManyInput | BaseUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BaseUser update
   */
  export type BaseUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUserInclude<ExtArgs> | null
    /**
     * The data needed to update a BaseUser.
     */
    data: XOR<BaseUserUpdateInput, BaseUserUncheckedUpdateInput>
    /**
     * Choose, which BaseUser to update.
     */
    where: BaseUserWhereUniqueInput
  }

  /**
   * BaseUser updateMany
   */
  export type BaseUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BaseUsers.
     */
    data: XOR<BaseUserUpdateManyMutationInput, BaseUserUncheckedUpdateManyInput>
    /**
     * Filter which BaseUsers to update
     */
    where?: BaseUserWhereInput
    /**
     * Limit how many BaseUsers to update.
     */
    limit?: number
  }

  /**
   * BaseUser updateManyAndReturn
   */
  export type BaseUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * The data used to update BaseUsers.
     */
    data: XOR<BaseUserUpdateManyMutationInput, BaseUserUncheckedUpdateManyInput>
    /**
     * Filter which BaseUsers to update
     */
    where?: BaseUserWhereInput
    /**
     * Limit how many BaseUsers to update.
     */
    limit?: number
  }

  /**
   * BaseUser upsert
   */
  export type BaseUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUserInclude<ExtArgs> | null
    /**
     * The filter to search for the BaseUser to update in case it exists.
     */
    where: BaseUserWhereUniqueInput
    /**
     * In case the BaseUser found by the `where` argument doesn't exist, create a new BaseUser with this data.
     */
    create: XOR<BaseUserCreateInput, BaseUserUncheckedCreateInput>
    /**
     * In case the BaseUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaseUserUpdateInput, BaseUserUncheckedUpdateInput>
  }

  /**
   * BaseUser delete
   */
  export type BaseUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUserInclude<ExtArgs> | null
    /**
     * Filter which BaseUser to delete.
     */
    where: BaseUserWhereUniqueInput
  }

  /**
   * BaseUser deleteMany
   */
  export type BaseUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseUsers to delete
     */
    where?: BaseUserWhereInput
    /**
     * Limit how many BaseUsers to delete.
     */
    limit?: number
  }

  /**
   * BaseUser.customer
   */
  export type BaseUser$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * BaseUser.trainer
   */
  export type BaseUser$trainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    where?: TrainerWhereInput
  }

  /**
   * BaseUser.admin
   */
  export type BaseUser$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * BaseUser.UserConsent
   */
  export type BaseUser$UserConsentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    where?: UserConsentWhereInput
    orderBy?: UserConsentOrderByWithRelationInput | UserConsentOrderByWithRelationInput[]
    cursor?: UserConsentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserConsentScalarFieldEnum | UserConsentScalarFieldEnum[]
  }

  /**
   * BaseUser without action
   */
  export type BaseUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseUser
     */
    select?: BaseUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseUser
     */
    omit?: BaseUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseUserInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    coins: number | null
  }

  export type CustomerSumAggregateOutputType = {
    coins: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    coins: number | null
    emergencyContact: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    coins: number | null
    emergencyContact: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    userId: number
    coins: number
    preferredTrainingTypes: number
    emergencyContact: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    coins?: true
  }

  export type CustomerSumAggregateInputType = {
    coins?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    userId?: true
    coins?: true
    emergencyContact?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    userId?: true
    coins?: true
    emergencyContact?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    userId?: true
    coins?: true
    preferredTrainingTypes?: true
    emergencyContact?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    userId: string
    coins: number
    preferredTrainingTypes: $Enums.TrainingType[]
    emergencyContact: string | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coins?: boolean
    preferredTrainingTypes?: boolean
    emergencyContact?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
    coinsTransactions?: boolean | Customer$coinsTransactionsArgs<ExtArgs>
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    coinsPurchases?: boolean | Customer$coinsPurchasesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coins?: boolean
    preferredTrainingTypes?: boolean
    emergencyContact?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coins?: boolean
    preferredTrainingTypes?: boolean
    emergencyContact?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    userId?: boolean
    coins?: boolean
    preferredTrainingTypes?: boolean
    emergencyContact?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "coins" | "preferredTrainingTypes" | "emergencyContact", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
    coinsTransactions?: boolean | Customer$coinsTransactionsArgs<ExtArgs>
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    coinsPurchases?: boolean | Customer$coinsPurchasesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$BaseUserPayload<ExtArgs>
      coinsTransactions: Prisma.$CoinsTransactionPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      coinsPurchases: Prisma.$CoinsPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      coins: number
      preferredTrainingTypes: $Enums.TrainingType[]
      emergencyContact: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends BaseUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseUserDefaultArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coinsTransactions<T extends Customer$coinsTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$coinsTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Customer$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coinsPurchases<T extends Customer$coinsPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$coinsPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly userId: FieldRef<"Customer", 'String'>
    readonly coins: FieldRef<"Customer", 'Int'>
    readonly preferredTrainingTypes: FieldRef<"Customer", 'TrainingType[]'>
    readonly emergencyContact: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.coinsTransactions
   */
  export type Customer$coinsTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    where?: CoinsTransactionWhereInput
    orderBy?: CoinsTransactionOrderByWithRelationInput | CoinsTransactionOrderByWithRelationInput[]
    cursor?: CoinsTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoinsTransactionScalarFieldEnum | CoinsTransactionScalarFieldEnum[]
  }

  /**
   * Customer.bookings
   */
  export type Customer$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Customer.coinsPurchases
   */
  export type Customer$coinsPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    where?: CoinsPurchaseWhereInput
    orderBy?: CoinsPurchaseOrderByWithRelationInput | CoinsPurchaseOrderByWithRelationInput[]
    cursor?: CoinsPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoinsPurchaseScalarFieldEnum | CoinsPurchaseScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model UserConsent
   */

  export type AggregateUserConsent = {
    _count: UserConsentCountAggregateOutputType | null
    _min: UserConsentMinAggregateOutputType | null
    _max: UserConsentMaxAggregateOutputType | null
  }

  export type UserConsentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    consentType: $Enums.ConsentType | null
    granted: boolean | null
    grantedAt: Date | null
    revokedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type UserConsentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    consentType: $Enums.ConsentType | null
    granted: boolean | null
    grantedAt: Date | null
    revokedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type UserConsentCountAggregateOutputType = {
    id: number
    userId: number
    consentType: number
    granted: number
    grantedAt: number
    revokedAt: number
    ipAddress: number
    userAgent: number
    _all: number
  }


  export type UserConsentMinAggregateInputType = {
    id?: true
    userId?: true
    consentType?: true
    granted?: true
    grantedAt?: true
    revokedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type UserConsentMaxAggregateInputType = {
    id?: true
    userId?: true
    consentType?: true
    granted?: true
    grantedAt?: true
    revokedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type UserConsentCountAggregateInputType = {
    id?: true
    userId?: true
    consentType?: true
    granted?: true
    grantedAt?: true
    revokedAt?: true
    ipAddress?: true
    userAgent?: true
    _all?: true
  }

  export type UserConsentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserConsent to aggregate.
     */
    where?: UserConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConsents to fetch.
     */
    orderBy?: UserConsentOrderByWithRelationInput | UserConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserConsents
    **/
    _count?: true | UserConsentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserConsentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserConsentMaxAggregateInputType
  }

  export type GetUserConsentAggregateType<T extends UserConsentAggregateArgs> = {
        [P in keyof T & keyof AggregateUserConsent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserConsent[P]>
      : GetScalarType<T[P], AggregateUserConsent[P]>
  }




  export type UserConsentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserConsentWhereInput
    orderBy?: UserConsentOrderByWithAggregationInput | UserConsentOrderByWithAggregationInput[]
    by: UserConsentScalarFieldEnum[] | UserConsentScalarFieldEnum
    having?: UserConsentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserConsentCountAggregateInputType | true
    _min?: UserConsentMinAggregateInputType
    _max?: UserConsentMaxAggregateInputType
  }

  export type UserConsentGroupByOutputType = {
    id: string
    userId: string
    consentType: $Enums.ConsentType
    granted: boolean
    grantedAt: Date
    revokedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    _count: UserConsentCountAggregateOutputType | null
    _min: UserConsentMinAggregateOutputType | null
    _max: UserConsentMaxAggregateOutputType | null
  }

  type GetUserConsentGroupByPayload<T extends UserConsentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserConsentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserConsentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserConsentGroupByOutputType[P]>
            : GetScalarType<T[P], UserConsentGroupByOutputType[P]>
        }
      >
    >


  export type UserConsentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    consentType?: boolean
    granted?: boolean
    grantedAt?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userConsent"]>

  export type UserConsentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    consentType?: boolean
    granted?: boolean
    grantedAt?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userConsent"]>

  export type UserConsentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    consentType?: boolean
    granted?: boolean
    grantedAt?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userConsent"]>

  export type UserConsentSelectScalar = {
    id?: boolean
    userId?: boolean
    consentType?: boolean
    granted?: boolean
    grantedAt?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }

  export type UserConsentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "consentType" | "granted" | "grantedAt" | "revokedAt" | "ipAddress" | "userAgent", ExtArgs["result"]["userConsent"]>
  export type UserConsentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }
  export type UserConsentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }
  export type UserConsentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }

  export type $UserConsentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserConsent"
    objects: {
      user: Prisma.$BaseUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      consentType: $Enums.ConsentType
      granted: boolean
      grantedAt: Date
      revokedAt: Date | null
      ipAddress: string | null
      userAgent: string | null
    }, ExtArgs["result"]["userConsent"]>
    composites: {}
  }

  type UserConsentGetPayload<S extends boolean | null | undefined | UserConsentDefaultArgs> = $Result.GetResult<Prisma.$UserConsentPayload, S>

  type UserConsentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserConsentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserConsentCountAggregateInputType | true
    }

  export interface UserConsentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserConsent'], meta: { name: 'UserConsent' } }
    /**
     * Find zero or one UserConsent that matches the filter.
     * @param {UserConsentFindUniqueArgs} args - Arguments to find a UserConsent
     * @example
     * // Get one UserConsent
     * const userConsent = await prisma.userConsent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserConsentFindUniqueArgs>(args: SelectSubset<T, UserConsentFindUniqueArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserConsent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserConsentFindUniqueOrThrowArgs} args - Arguments to find a UserConsent
     * @example
     * // Get one UserConsent
     * const userConsent = await prisma.userConsent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserConsentFindUniqueOrThrowArgs>(args: SelectSubset<T, UserConsentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserConsent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentFindFirstArgs} args - Arguments to find a UserConsent
     * @example
     * // Get one UserConsent
     * const userConsent = await prisma.userConsent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserConsentFindFirstArgs>(args?: SelectSubset<T, UserConsentFindFirstArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserConsent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentFindFirstOrThrowArgs} args - Arguments to find a UserConsent
     * @example
     * // Get one UserConsent
     * const userConsent = await prisma.userConsent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserConsentFindFirstOrThrowArgs>(args?: SelectSubset<T, UserConsentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserConsents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserConsents
     * const userConsents = await prisma.userConsent.findMany()
     * 
     * // Get first 10 UserConsents
     * const userConsents = await prisma.userConsent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userConsentWithIdOnly = await prisma.userConsent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserConsentFindManyArgs>(args?: SelectSubset<T, UserConsentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserConsent.
     * @param {UserConsentCreateArgs} args - Arguments to create a UserConsent.
     * @example
     * // Create one UserConsent
     * const UserConsent = await prisma.userConsent.create({
     *   data: {
     *     // ... data to create a UserConsent
     *   }
     * })
     * 
     */
    create<T extends UserConsentCreateArgs>(args: SelectSubset<T, UserConsentCreateArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserConsents.
     * @param {UserConsentCreateManyArgs} args - Arguments to create many UserConsents.
     * @example
     * // Create many UserConsents
     * const userConsent = await prisma.userConsent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserConsentCreateManyArgs>(args?: SelectSubset<T, UserConsentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserConsents and returns the data saved in the database.
     * @param {UserConsentCreateManyAndReturnArgs} args - Arguments to create many UserConsents.
     * @example
     * // Create many UserConsents
     * const userConsent = await prisma.userConsent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserConsents and only return the `id`
     * const userConsentWithIdOnly = await prisma.userConsent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserConsentCreateManyAndReturnArgs>(args?: SelectSubset<T, UserConsentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserConsent.
     * @param {UserConsentDeleteArgs} args - Arguments to delete one UserConsent.
     * @example
     * // Delete one UserConsent
     * const UserConsent = await prisma.userConsent.delete({
     *   where: {
     *     // ... filter to delete one UserConsent
     *   }
     * })
     * 
     */
    delete<T extends UserConsentDeleteArgs>(args: SelectSubset<T, UserConsentDeleteArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserConsent.
     * @param {UserConsentUpdateArgs} args - Arguments to update one UserConsent.
     * @example
     * // Update one UserConsent
     * const userConsent = await prisma.userConsent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserConsentUpdateArgs>(args: SelectSubset<T, UserConsentUpdateArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserConsents.
     * @param {UserConsentDeleteManyArgs} args - Arguments to filter UserConsents to delete.
     * @example
     * // Delete a few UserConsents
     * const { count } = await prisma.userConsent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserConsentDeleteManyArgs>(args?: SelectSubset<T, UserConsentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserConsents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserConsents
     * const userConsent = await prisma.userConsent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserConsentUpdateManyArgs>(args: SelectSubset<T, UserConsentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserConsents and returns the data updated in the database.
     * @param {UserConsentUpdateManyAndReturnArgs} args - Arguments to update many UserConsents.
     * @example
     * // Update many UserConsents
     * const userConsent = await prisma.userConsent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserConsents and only return the `id`
     * const userConsentWithIdOnly = await prisma.userConsent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserConsentUpdateManyAndReturnArgs>(args: SelectSubset<T, UserConsentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserConsent.
     * @param {UserConsentUpsertArgs} args - Arguments to update or create a UserConsent.
     * @example
     * // Update or create a UserConsent
     * const userConsent = await prisma.userConsent.upsert({
     *   create: {
     *     // ... data to create a UserConsent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserConsent we want to update
     *   }
     * })
     */
    upsert<T extends UserConsentUpsertArgs>(args: SelectSubset<T, UserConsentUpsertArgs<ExtArgs>>): Prisma__UserConsentClient<$Result.GetResult<Prisma.$UserConsentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserConsents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentCountArgs} args - Arguments to filter UserConsents to count.
     * @example
     * // Count the number of UserConsents
     * const count = await prisma.userConsent.count({
     *   where: {
     *     // ... the filter for the UserConsents we want to count
     *   }
     * })
    **/
    count<T extends UserConsentCountArgs>(
      args?: Subset<T, UserConsentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserConsentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserConsent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserConsentAggregateArgs>(args: Subset<T, UserConsentAggregateArgs>): Prisma.PrismaPromise<GetUserConsentAggregateType<T>>

    /**
     * Group by UserConsent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserConsentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserConsentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserConsentGroupByArgs['orderBy'] }
        : { orderBy?: UserConsentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserConsentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserConsentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserConsent model
   */
  readonly fields: UserConsentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserConsent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserConsentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends BaseUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseUserDefaultArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserConsent model
   */
  interface UserConsentFieldRefs {
    readonly id: FieldRef<"UserConsent", 'String'>
    readonly userId: FieldRef<"UserConsent", 'String'>
    readonly consentType: FieldRef<"UserConsent", 'ConsentType'>
    readonly granted: FieldRef<"UserConsent", 'Boolean'>
    readonly grantedAt: FieldRef<"UserConsent", 'DateTime'>
    readonly revokedAt: FieldRef<"UserConsent", 'DateTime'>
    readonly ipAddress: FieldRef<"UserConsent", 'String'>
    readonly userAgent: FieldRef<"UserConsent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserConsent findUnique
   */
  export type UserConsentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter, which UserConsent to fetch.
     */
    where: UserConsentWhereUniqueInput
  }

  /**
   * UserConsent findUniqueOrThrow
   */
  export type UserConsentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter, which UserConsent to fetch.
     */
    where: UserConsentWhereUniqueInput
  }

  /**
   * UserConsent findFirst
   */
  export type UserConsentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter, which UserConsent to fetch.
     */
    where?: UserConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConsents to fetch.
     */
    orderBy?: UserConsentOrderByWithRelationInput | UserConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserConsents.
     */
    cursor?: UserConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserConsents.
     */
    distinct?: UserConsentScalarFieldEnum | UserConsentScalarFieldEnum[]
  }

  /**
   * UserConsent findFirstOrThrow
   */
  export type UserConsentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter, which UserConsent to fetch.
     */
    where?: UserConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConsents to fetch.
     */
    orderBy?: UserConsentOrderByWithRelationInput | UserConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserConsents.
     */
    cursor?: UserConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserConsents.
     */
    distinct?: UserConsentScalarFieldEnum | UserConsentScalarFieldEnum[]
  }

  /**
   * UserConsent findMany
   */
  export type UserConsentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter, which UserConsents to fetch.
     */
    where?: UserConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserConsents to fetch.
     */
    orderBy?: UserConsentOrderByWithRelationInput | UserConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserConsents.
     */
    cursor?: UserConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserConsents.
     */
    skip?: number
    distinct?: UserConsentScalarFieldEnum | UserConsentScalarFieldEnum[]
  }

  /**
   * UserConsent create
   */
  export type UserConsentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * The data needed to create a UserConsent.
     */
    data: XOR<UserConsentCreateInput, UserConsentUncheckedCreateInput>
  }

  /**
   * UserConsent createMany
   */
  export type UserConsentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserConsents.
     */
    data: UserConsentCreateManyInput | UserConsentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserConsent createManyAndReturn
   */
  export type UserConsentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * The data used to create many UserConsents.
     */
    data: UserConsentCreateManyInput | UserConsentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserConsent update
   */
  export type UserConsentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * The data needed to update a UserConsent.
     */
    data: XOR<UserConsentUpdateInput, UserConsentUncheckedUpdateInput>
    /**
     * Choose, which UserConsent to update.
     */
    where: UserConsentWhereUniqueInput
  }

  /**
   * UserConsent updateMany
   */
  export type UserConsentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserConsents.
     */
    data: XOR<UserConsentUpdateManyMutationInput, UserConsentUncheckedUpdateManyInput>
    /**
     * Filter which UserConsents to update
     */
    where?: UserConsentWhereInput
    /**
     * Limit how many UserConsents to update.
     */
    limit?: number
  }

  /**
   * UserConsent updateManyAndReturn
   */
  export type UserConsentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * The data used to update UserConsents.
     */
    data: XOR<UserConsentUpdateManyMutationInput, UserConsentUncheckedUpdateManyInput>
    /**
     * Filter which UserConsents to update
     */
    where?: UserConsentWhereInput
    /**
     * Limit how many UserConsents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserConsent upsert
   */
  export type UserConsentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * The filter to search for the UserConsent to update in case it exists.
     */
    where: UserConsentWhereUniqueInput
    /**
     * In case the UserConsent found by the `where` argument doesn't exist, create a new UserConsent with this data.
     */
    create: XOR<UserConsentCreateInput, UserConsentUncheckedCreateInput>
    /**
     * In case the UserConsent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserConsentUpdateInput, UserConsentUncheckedUpdateInput>
  }

  /**
   * UserConsent delete
   */
  export type UserConsentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
    /**
     * Filter which UserConsent to delete.
     */
    where: UserConsentWhereUniqueInput
  }

  /**
   * UserConsent deleteMany
   */
  export type UserConsentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserConsents to delete
     */
    where?: UserConsentWhereInput
    /**
     * Limit how many UserConsents to delete.
     */
    limit?: number
  }

  /**
   * UserConsent without action
   */
  export type UserConsentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserConsent
     */
    select?: UserConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserConsent
     */
    omit?: UserConsentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserConsentInclude<ExtArgs> | null
  }


  /**
   * Model Trainer
   */

  export type AggregateTrainer = {
    _count: TrainerCountAggregateOutputType | null
    _min: TrainerMinAggregateOutputType | null
    _max: TrainerMaxAggregateOutputType | null
  }

  export type TrainerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    certification: string | null
  }

  export type TrainerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    certification: string | null
  }

  export type TrainerCountAggregateOutputType = {
    id: number
    userId: number
    certification: number
    specialization: number
    _all: number
  }


  export type TrainerMinAggregateInputType = {
    id?: true
    userId?: true
    certification?: true
  }

  export type TrainerMaxAggregateInputType = {
    id?: true
    userId?: true
    certification?: true
  }

  export type TrainerCountAggregateInputType = {
    id?: true
    userId?: true
    certification?: true
    specialization?: true
    _all?: true
  }

  export type TrainerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trainer to aggregate.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: TrainerOrderByWithRelationInput | TrainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trainers
    **/
    _count?: true | TrainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainerMaxAggregateInputType
  }

  export type GetTrainerAggregateType<T extends TrainerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainer[P]>
      : GetScalarType<T[P], AggregateTrainer[P]>
  }




  export type TrainerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainerWhereInput
    orderBy?: TrainerOrderByWithAggregationInput | TrainerOrderByWithAggregationInput[]
    by: TrainerScalarFieldEnum[] | TrainerScalarFieldEnum
    having?: TrainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainerCountAggregateInputType | true
    _min?: TrainerMinAggregateInputType
    _max?: TrainerMaxAggregateInputType
  }

  export type TrainerGroupByOutputType = {
    id: string
    userId: string
    certification: string
    specialization: $Enums.TrainingType[]
    _count: TrainerCountAggregateOutputType | null
    _min: TrainerMinAggregateOutputType | null
    _max: TrainerMaxAggregateOutputType | null
  }

  type GetTrainerGroupByPayload<T extends TrainerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainerGroupByOutputType[P]>
            : GetScalarType<T[P], TrainerGroupByOutputType[P]>
        }
      >
    >


  export type TrainerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    certification?: boolean
    specialization?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
    trainingSessions?: boolean | Trainer$trainingSessionsArgs<ExtArgs>
    _count?: boolean | TrainerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainer"]>

  export type TrainerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    certification?: boolean
    specialization?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainer"]>

  export type TrainerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    certification?: boolean
    specialization?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainer"]>

  export type TrainerSelectScalar = {
    id?: boolean
    userId?: boolean
    certification?: boolean
    specialization?: boolean
  }

  export type TrainerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "certification" | "specialization", ExtArgs["result"]["trainer"]>
  export type TrainerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
    trainingSessions?: boolean | Trainer$trainingSessionsArgs<ExtArgs>
    _count?: boolean | TrainerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrainerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }
  export type TrainerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }

  export type $TrainerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trainer"
    objects: {
      user: Prisma.$BaseUserPayload<ExtArgs>
      trainingSessions: Prisma.$TrainingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      certification: string
      specialization: $Enums.TrainingType[]
    }, ExtArgs["result"]["trainer"]>
    composites: {}
  }

  type TrainerGetPayload<S extends boolean | null | undefined | TrainerDefaultArgs> = $Result.GetResult<Prisma.$TrainerPayload, S>

  type TrainerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainerCountAggregateInputType | true
    }

  export interface TrainerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trainer'], meta: { name: 'Trainer' } }
    /**
     * Find zero or one Trainer that matches the filter.
     * @param {TrainerFindUniqueArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainerFindUniqueArgs>(args: SelectSubset<T, TrainerFindUniqueArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trainer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainerFindUniqueOrThrowArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainerFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trainer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerFindFirstArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainerFindFirstArgs>(args?: SelectSubset<T, TrainerFindFirstArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trainer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerFindFirstOrThrowArgs} args - Arguments to find a Trainer
     * @example
     * // Get one Trainer
     * const trainer = await prisma.trainer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainerFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trainers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trainers
     * const trainers = await prisma.trainer.findMany()
     * 
     * // Get first 10 Trainers
     * const trainers = await prisma.trainer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainerWithIdOnly = await prisma.trainer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainerFindManyArgs>(args?: SelectSubset<T, TrainerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trainer.
     * @param {TrainerCreateArgs} args - Arguments to create a Trainer.
     * @example
     * // Create one Trainer
     * const Trainer = await prisma.trainer.create({
     *   data: {
     *     // ... data to create a Trainer
     *   }
     * })
     * 
     */
    create<T extends TrainerCreateArgs>(args: SelectSubset<T, TrainerCreateArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trainers.
     * @param {TrainerCreateManyArgs} args - Arguments to create many Trainers.
     * @example
     * // Create many Trainers
     * const trainer = await prisma.trainer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainerCreateManyArgs>(args?: SelectSubset<T, TrainerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trainers and returns the data saved in the database.
     * @param {TrainerCreateManyAndReturnArgs} args - Arguments to create many Trainers.
     * @example
     * // Create many Trainers
     * const trainer = await prisma.trainer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trainers and only return the `id`
     * const trainerWithIdOnly = await prisma.trainer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainerCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trainer.
     * @param {TrainerDeleteArgs} args - Arguments to delete one Trainer.
     * @example
     * // Delete one Trainer
     * const Trainer = await prisma.trainer.delete({
     *   where: {
     *     // ... filter to delete one Trainer
     *   }
     * })
     * 
     */
    delete<T extends TrainerDeleteArgs>(args: SelectSubset<T, TrainerDeleteArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trainer.
     * @param {TrainerUpdateArgs} args - Arguments to update one Trainer.
     * @example
     * // Update one Trainer
     * const trainer = await prisma.trainer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainerUpdateArgs>(args: SelectSubset<T, TrainerUpdateArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trainers.
     * @param {TrainerDeleteManyArgs} args - Arguments to filter Trainers to delete.
     * @example
     * // Delete a few Trainers
     * const { count } = await prisma.trainer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainerDeleteManyArgs>(args?: SelectSubset<T, TrainerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trainers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trainers
     * const trainer = await prisma.trainer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainerUpdateManyArgs>(args: SelectSubset<T, TrainerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trainers and returns the data updated in the database.
     * @param {TrainerUpdateManyAndReturnArgs} args - Arguments to update many Trainers.
     * @example
     * // Update many Trainers
     * const trainer = await prisma.trainer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trainers and only return the `id`
     * const trainerWithIdOnly = await prisma.trainer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainerUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trainer.
     * @param {TrainerUpsertArgs} args - Arguments to update or create a Trainer.
     * @example
     * // Update or create a Trainer
     * const trainer = await prisma.trainer.upsert({
     *   create: {
     *     // ... data to create a Trainer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trainer we want to update
     *   }
     * })
     */
    upsert<T extends TrainerUpsertArgs>(args: SelectSubset<T, TrainerUpsertArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trainers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerCountArgs} args - Arguments to filter Trainers to count.
     * @example
     * // Count the number of Trainers
     * const count = await prisma.trainer.count({
     *   where: {
     *     // ... the filter for the Trainers we want to count
     *   }
     * })
    **/
    count<T extends TrainerCountArgs>(
      args?: Subset<T, TrainerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trainer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainerAggregateArgs>(args: Subset<T, TrainerAggregateArgs>): Prisma.PrismaPromise<GetTrainerAggregateType<T>>

    /**
     * Group by Trainer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainerGroupByArgs['orderBy'] }
        : { orderBy?: TrainerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trainer model
   */
  readonly fields: TrainerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trainer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends BaseUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseUserDefaultArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trainingSessions<T extends Trainer$trainingSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Trainer$trainingSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trainer model
   */
  interface TrainerFieldRefs {
    readonly id: FieldRef<"Trainer", 'String'>
    readonly userId: FieldRef<"Trainer", 'String'>
    readonly certification: FieldRef<"Trainer", 'String'>
    readonly specialization: FieldRef<"Trainer", 'TrainingType[]'>
  }
    

  // Custom InputTypes
  /**
   * Trainer findUnique
   */
  export type TrainerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter, which Trainer to fetch.
     */
    where: TrainerWhereUniqueInput
  }

  /**
   * Trainer findUniqueOrThrow
   */
  export type TrainerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter, which Trainer to fetch.
     */
    where: TrainerWhereUniqueInput
  }

  /**
   * Trainer findFirst
   */
  export type TrainerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter, which Trainer to fetch.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: TrainerOrderByWithRelationInput | TrainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trainers.
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainers.
     */
    distinct?: TrainerScalarFieldEnum | TrainerScalarFieldEnum[]
  }

  /**
   * Trainer findFirstOrThrow
   */
  export type TrainerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter, which Trainer to fetch.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: TrainerOrderByWithRelationInput | TrainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trainers.
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trainers.
     */
    distinct?: TrainerScalarFieldEnum | TrainerScalarFieldEnum[]
  }

  /**
   * Trainer findMany
   */
  export type TrainerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter, which Trainers to fetch.
     */
    where?: TrainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trainers to fetch.
     */
    orderBy?: TrainerOrderByWithRelationInput | TrainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trainers.
     */
    cursor?: TrainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trainers.
     */
    skip?: number
    distinct?: TrainerScalarFieldEnum | TrainerScalarFieldEnum[]
  }

  /**
   * Trainer create
   */
  export type TrainerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trainer.
     */
    data: XOR<TrainerCreateInput, TrainerUncheckedCreateInput>
  }

  /**
   * Trainer createMany
   */
  export type TrainerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trainers.
     */
    data: TrainerCreateManyInput | TrainerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trainer createManyAndReturn
   */
  export type TrainerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * The data used to create many Trainers.
     */
    data: TrainerCreateManyInput | TrainerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trainer update
   */
  export type TrainerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trainer.
     */
    data: XOR<TrainerUpdateInput, TrainerUncheckedUpdateInput>
    /**
     * Choose, which Trainer to update.
     */
    where: TrainerWhereUniqueInput
  }

  /**
   * Trainer updateMany
   */
  export type TrainerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trainers.
     */
    data: XOR<TrainerUpdateManyMutationInput, TrainerUncheckedUpdateManyInput>
    /**
     * Filter which Trainers to update
     */
    where?: TrainerWhereInput
    /**
     * Limit how many Trainers to update.
     */
    limit?: number
  }

  /**
   * Trainer updateManyAndReturn
   */
  export type TrainerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * The data used to update Trainers.
     */
    data: XOR<TrainerUpdateManyMutationInput, TrainerUncheckedUpdateManyInput>
    /**
     * Filter which Trainers to update
     */
    where?: TrainerWhereInput
    /**
     * Limit how many Trainers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trainer upsert
   */
  export type TrainerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trainer to update in case it exists.
     */
    where: TrainerWhereUniqueInput
    /**
     * In case the Trainer found by the `where` argument doesn't exist, create a new Trainer with this data.
     */
    create: XOR<TrainerCreateInput, TrainerUncheckedCreateInput>
    /**
     * In case the Trainer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainerUpdateInput, TrainerUncheckedUpdateInput>
  }

  /**
   * Trainer delete
   */
  export type TrainerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
    /**
     * Filter which Trainer to delete.
     */
    where: TrainerWhereUniqueInput
  }

  /**
   * Trainer deleteMany
   */
  export type TrainerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trainers to delete
     */
    where?: TrainerWhereInput
    /**
     * Limit how many Trainers to delete.
     */
    limit?: number
  }

  /**
   * Trainer.trainingSessions
   */
  export type Trainer$trainingSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    where?: TrainingSessionWhereInput
    orderBy?: TrainingSessionOrderByWithRelationInput | TrainingSessionOrderByWithRelationInput[]
    cursor?: TrainingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainingSessionScalarFieldEnum | TrainingSessionScalarFieldEnum[]
  }

  /**
   * Trainer without action
   */
  export type TrainerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trainer
     */
    select?: TrainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trainer
     */
    omit?: TrainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    userId: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BaseUserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$BaseUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends BaseUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseUserDefaultArgs<ExtArgs>>): Prisma__BaseUserClient<$Result.GetResult<Prisma.$BaseUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model TrainingSession
   */

  export type AggregateTrainingSession = {
    _count: TrainingSessionCountAggregateOutputType | null
    _avg: TrainingSessionAvgAggregateOutputType | null
    _sum: TrainingSessionSumAggregateOutputType | null
    _min: TrainingSessionMinAggregateOutputType | null
    _max: TrainingSessionMaxAggregateOutputType | null
  }

  export type TrainingSessionAvgAggregateOutputType = {
    durationMinutes: number | null
    maxParticipants: number | null
    coinsRequired: number | null
  }

  export type TrainingSessionSumAggregateOutputType = {
    durationMinutes: number | null
    maxParticipants: number | null
    coinsRequired: number | null
  }

  export type TrainingSessionMinAggregateOutputType = {
    id: string | null
    trainerId: string | null
    trainingType: $Enums.TrainingType | null
    date: Date | null
    startTime: $Enums.TrainingTimeSlot | null
    durationMinutes: number | null
    maxParticipants: number | null
    coinsRequired: number | null
    status: $Enums.TrainingStatus | null
    qrCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingSessionMaxAggregateOutputType = {
    id: string | null
    trainerId: string | null
    trainingType: $Enums.TrainingType | null
    date: Date | null
    startTime: $Enums.TrainingTimeSlot | null
    durationMinutes: number | null
    maxParticipants: number | null
    coinsRequired: number | null
    status: $Enums.TrainingStatus | null
    qrCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainingSessionCountAggregateOutputType = {
    id: number
    trainerId: number
    trainingType: number
    date: number
    startTime: number
    durationMinutes: number
    maxParticipants: number
    coinsRequired: number
    status: number
    qrCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrainingSessionAvgAggregateInputType = {
    durationMinutes?: true
    maxParticipants?: true
    coinsRequired?: true
  }

  export type TrainingSessionSumAggregateInputType = {
    durationMinutes?: true
    maxParticipants?: true
    coinsRequired?: true
  }

  export type TrainingSessionMinAggregateInputType = {
    id?: true
    trainerId?: true
    trainingType?: true
    date?: true
    startTime?: true
    durationMinutes?: true
    maxParticipants?: true
    coinsRequired?: true
    status?: true
    qrCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingSessionMaxAggregateInputType = {
    id?: true
    trainerId?: true
    trainingType?: true
    date?: true
    startTime?: true
    durationMinutes?: true
    maxParticipants?: true
    coinsRequired?: true
    status?: true
    qrCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainingSessionCountAggregateInputType = {
    id?: true
    trainerId?: true
    trainingType?: true
    date?: true
    startTime?: true
    durationMinutes?: true
    maxParticipants?: true
    coinsRequired?: true
    status?: true
    qrCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrainingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingSession to aggregate.
     */
    where?: TrainingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingSessions to fetch.
     */
    orderBy?: TrainingSessionOrderByWithRelationInput | TrainingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainingSessions
    **/
    _count?: true | TrainingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainingSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainingSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainingSessionMaxAggregateInputType
  }

  export type GetTrainingSessionAggregateType<T extends TrainingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainingSession[P]>
      : GetScalarType<T[P], AggregateTrainingSession[P]>
  }




  export type TrainingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainingSessionWhereInput
    orderBy?: TrainingSessionOrderByWithAggregationInput | TrainingSessionOrderByWithAggregationInput[]
    by: TrainingSessionScalarFieldEnum[] | TrainingSessionScalarFieldEnum
    having?: TrainingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainingSessionCountAggregateInputType | true
    _avg?: TrainingSessionAvgAggregateInputType
    _sum?: TrainingSessionSumAggregateInputType
    _min?: TrainingSessionMinAggregateInputType
    _max?: TrainingSessionMaxAggregateInputType
  }

  export type TrainingSessionGroupByOutputType = {
    id: string
    trainerId: string
    trainingType: $Enums.TrainingType
    date: Date
    startTime: $Enums.TrainingTimeSlot
    durationMinutes: number
    maxParticipants: number
    coinsRequired: number
    status: $Enums.TrainingStatus
    qrCode: string
    createdAt: Date
    updatedAt: Date
    _count: TrainingSessionCountAggregateOutputType | null
    _avg: TrainingSessionAvgAggregateOutputType | null
    _sum: TrainingSessionSumAggregateOutputType | null
    _min: TrainingSessionMinAggregateOutputType | null
    _max: TrainingSessionMaxAggregateOutputType | null
  }

  type GetTrainingSessionGroupByPayload<T extends TrainingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TrainingSessionGroupByOutputType[P]>
        }
      >
    >


  export type TrainingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainerId?: boolean
    trainingType?: boolean
    date?: boolean
    startTime?: boolean
    durationMinutes?: boolean
    maxParticipants?: boolean
    coinsRequired?: boolean
    status?: boolean
    qrCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainer?: boolean | TrainerDefaultArgs<ExtArgs>
    bookings?: boolean | TrainingSession$bookingsArgs<ExtArgs>
    _count?: boolean | TrainingSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingSession"]>

  export type TrainingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainerId?: boolean
    trainingType?: boolean
    date?: boolean
    startTime?: boolean
    durationMinutes?: boolean
    maxParticipants?: boolean
    coinsRequired?: boolean
    status?: boolean
    qrCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainer?: boolean | TrainerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingSession"]>

  export type TrainingSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trainerId?: boolean
    trainingType?: boolean
    date?: boolean
    startTime?: boolean
    durationMinutes?: boolean
    maxParticipants?: boolean
    coinsRequired?: boolean
    status?: boolean
    qrCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trainer?: boolean | TrainerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainingSession"]>

  export type TrainingSessionSelectScalar = {
    id?: boolean
    trainerId?: boolean
    trainingType?: boolean
    date?: boolean
    startTime?: boolean
    durationMinutes?: boolean
    maxParticipants?: boolean
    coinsRequired?: boolean
    status?: boolean
    qrCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrainingSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trainerId" | "trainingType" | "date" | "startTime" | "durationMinutes" | "maxParticipants" | "coinsRequired" | "status" | "qrCode" | "createdAt" | "updatedAt", ExtArgs["result"]["trainingSession"]>
  export type TrainingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | TrainerDefaultArgs<ExtArgs>
    bookings?: boolean | TrainingSession$bookingsArgs<ExtArgs>
    _count?: boolean | TrainingSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrainingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | TrainerDefaultArgs<ExtArgs>
  }
  export type TrainingSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | TrainerDefaultArgs<ExtArgs>
  }

  export type $TrainingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainingSession"
    objects: {
      trainer: Prisma.$TrainerPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trainerId: string
      trainingType: $Enums.TrainingType
      date: Date
      startTime: $Enums.TrainingTimeSlot
      durationMinutes: number
      maxParticipants: number
      coinsRequired: number
      status: $Enums.TrainingStatus
      qrCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trainingSession"]>
    composites: {}
  }

  type TrainingSessionGetPayload<S extends boolean | null | undefined | TrainingSessionDefaultArgs> = $Result.GetResult<Prisma.$TrainingSessionPayload, S>

  type TrainingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainingSessionCountAggregateInputType | true
    }

  export interface TrainingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainingSession'], meta: { name: 'TrainingSession' } }
    /**
     * Find zero or one TrainingSession that matches the filter.
     * @param {TrainingSessionFindUniqueArgs} args - Arguments to find a TrainingSession
     * @example
     * // Get one TrainingSession
     * const trainingSession = await prisma.trainingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainingSessionFindUniqueArgs>(args: SelectSubset<T, TrainingSessionFindUniqueArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainingSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainingSessionFindUniqueOrThrowArgs} args - Arguments to find a TrainingSession
     * @example
     * // Get one TrainingSession
     * const trainingSession = await prisma.trainingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionFindFirstArgs} args - Arguments to find a TrainingSession
     * @example
     * // Get one TrainingSession
     * const trainingSession = await prisma.trainingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainingSessionFindFirstArgs>(args?: SelectSubset<T, TrainingSessionFindFirstArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionFindFirstOrThrowArgs} args - Arguments to find a TrainingSession
     * @example
     * // Get one TrainingSession
     * const trainingSession = await prisma.trainingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainingSessions
     * const trainingSessions = await prisma.trainingSession.findMany()
     * 
     * // Get first 10 TrainingSessions
     * const trainingSessions = await prisma.trainingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainingSessionWithIdOnly = await prisma.trainingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainingSessionFindManyArgs>(args?: SelectSubset<T, TrainingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainingSession.
     * @param {TrainingSessionCreateArgs} args - Arguments to create a TrainingSession.
     * @example
     * // Create one TrainingSession
     * const TrainingSession = await prisma.trainingSession.create({
     *   data: {
     *     // ... data to create a TrainingSession
     *   }
     * })
     * 
     */
    create<T extends TrainingSessionCreateArgs>(args: SelectSubset<T, TrainingSessionCreateArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainingSessions.
     * @param {TrainingSessionCreateManyArgs} args - Arguments to create many TrainingSessions.
     * @example
     * // Create many TrainingSessions
     * const trainingSession = await prisma.trainingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainingSessionCreateManyArgs>(args?: SelectSubset<T, TrainingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainingSessions and returns the data saved in the database.
     * @param {TrainingSessionCreateManyAndReturnArgs} args - Arguments to create many TrainingSessions.
     * @example
     * // Create many TrainingSessions
     * const trainingSession = await prisma.trainingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainingSessions and only return the `id`
     * const trainingSessionWithIdOnly = await prisma.trainingSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrainingSession.
     * @param {TrainingSessionDeleteArgs} args - Arguments to delete one TrainingSession.
     * @example
     * // Delete one TrainingSession
     * const TrainingSession = await prisma.trainingSession.delete({
     *   where: {
     *     // ... filter to delete one TrainingSession
     *   }
     * })
     * 
     */
    delete<T extends TrainingSessionDeleteArgs>(args: SelectSubset<T, TrainingSessionDeleteArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainingSession.
     * @param {TrainingSessionUpdateArgs} args - Arguments to update one TrainingSession.
     * @example
     * // Update one TrainingSession
     * const trainingSession = await prisma.trainingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainingSessionUpdateArgs>(args: SelectSubset<T, TrainingSessionUpdateArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainingSessions.
     * @param {TrainingSessionDeleteManyArgs} args - Arguments to filter TrainingSessions to delete.
     * @example
     * // Delete a few TrainingSessions
     * const { count } = await prisma.trainingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainingSessionDeleteManyArgs>(args?: SelectSubset<T, TrainingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainingSessions
     * const trainingSession = await prisma.trainingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainingSessionUpdateManyArgs>(args: SelectSubset<T, TrainingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainingSessions and returns the data updated in the database.
     * @param {TrainingSessionUpdateManyAndReturnArgs} args - Arguments to update many TrainingSessions.
     * @example
     * // Update many TrainingSessions
     * const trainingSession = await prisma.trainingSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainingSessions and only return the `id`
     * const trainingSessionWithIdOnly = await prisma.trainingSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrainingSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainingSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrainingSession.
     * @param {TrainingSessionUpsertArgs} args - Arguments to update or create a TrainingSession.
     * @example
     * // Update or create a TrainingSession
     * const trainingSession = await prisma.trainingSession.upsert({
     *   create: {
     *     // ... data to create a TrainingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainingSession we want to update
     *   }
     * })
     */
    upsert<T extends TrainingSessionUpsertArgs>(args: SelectSubset<T, TrainingSessionUpsertArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrainingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionCountArgs} args - Arguments to filter TrainingSessions to count.
     * @example
     * // Count the number of TrainingSessions
     * const count = await prisma.trainingSession.count({
     *   where: {
     *     // ... the filter for the TrainingSessions we want to count
     *   }
     * })
    **/
    count<T extends TrainingSessionCountArgs>(
      args?: Subset<T, TrainingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainingSessionAggregateArgs>(args: Subset<T, TrainingSessionAggregateArgs>): Prisma.PrismaPromise<GetTrainingSessionAggregateType<T>>

    /**
     * Group by TrainingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainingSessionGroupByArgs['orderBy'] }
        : { orderBy?: TrainingSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainingSession model
   */
  readonly fields: TrainingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainer<T extends TrainerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainerDefaultArgs<ExtArgs>>): Prisma__TrainerClient<$Result.GetResult<Prisma.$TrainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends TrainingSession$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, TrainingSession$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrainingSession model
   */
  interface TrainingSessionFieldRefs {
    readonly id: FieldRef<"TrainingSession", 'String'>
    readonly trainerId: FieldRef<"TrainingSession", 'String'>
    readonly trainingType: FieldRef<"TrainingSession", 'TrainingType'>
    readonly date: FieldRef<"TrainingSession", 'DateTime'>
    readonly startTime: FieldRef<"TrainingSession", 'TrainingTimeSlot'>
    readonly durationMinutes: FieldRef<"TrainingSession", 'Int'>
    readonly maxParticipants: FieldRef<"TrainingSession", 'Int'>
    readonly coinsRequired: FieldRef<"TrainingSession", 'Int'>
    readonly status: FieldRef<"TrainingSession", 'TrainingStatus'>
    readonly qrCode: FieldRef<"TrainingSession", 'String'>
    readonly createdAt: FieldRef<"TrainingSession", 'DateTime'>
    readonly updatedAt: FieldRef<"TrainingSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainingSession findUnique
   */
  export type TrainingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrainingSession to fetch.
     */
    where: TrainingSessionWhereUniqueInput
  }

  /**
   * TrainingSession findUniqueOrThrow
   */
  export type TrainingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrainingSession to fetch.
     */
    where: TrainingSessionWhereUniqueInput
  }

  /**
   * TrainingSession findFirst
   */
  export type TrainingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrainingSession to fetch.
     */
    where?: TrainingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingSessions to fetch.
     */
    orderBy?: TrainingSessionOrderByWithRelationInput | TrainingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingSessions.
     */
    cursor?: TrainingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingSessions.
     */
    distinct?: TrainingSessionScalarFieldEnum | TrainingSessionScalarFieldEnum[]
  }

  /**
   * TrainingSession findFirstOrThrow
   */
  export type TrainingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrainingSession to fetch.
     */
    where?: TrainingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingSessions to fetch.
     */
    orderBy?: TrainingSessionOrderByWithRelationInput | TrainingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainingSessions.
     */
    cursor?: TrainingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainingSessions.
     */
    distinct?: TrainingSessionScalarFieldEnum | TrainingSessionScalarFieldEnum[]
  }

  /**
   * TrainingSession findMany
   */
  export type TrainingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter, which TrainingSessions to fetch.
     */
    where?: TrainingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainingSessions to fetch.
     */
    orderBy?: TrainingSessionOrderByWithRelationInput | TrainingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainingSessions.
     */
    cursor?: TrainingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainingSessions.
     */
    skip?: number
    distinct?: TrainingSessionScalarFieldEnum | TrainingSessionScalarFieldEnum[]
  }

  /**
   * TrainingSession create
   */
  export type TrainingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainingSession.
     */
    data: XOR<TrainingSessionCreateInput, TrainingSessionUncheckedCreateInput>
  }

  /**
   * TrainingSession createMany
   */
  export type TrainingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainingSessions.
     */
    data: TrainingSessionCreateManyInput | TrainingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainingSession createManyAndReturn
   */
  export type TrainingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TrainingSessions.
     */
    data: TrainingSessionCreateManyInput | TrainingSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingSession update
   */
  export type TrainingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainingSession.
     */
    data: XOR<TrainingSessionUpdateInput, TrainingSessionUncheckedUpdateInput>
    /**
     * Choose, which TrainingSession to update.
     */
    where: TrainingSessionWhereUniqueInput
  }

  /**
   * TrainingSession updateMany
   */
  export type TrainingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainingSessions.
     */
    data: XOR<TrainingSessionUpdateManyMutationInput, TrainingSessionUncheckedUpdateManyInput>
    /**
     * Filter which TrainingSessions to update
     */
    where?: TrainingSessionWhereInput
    /**
     * Limit how many TrainingSessions to update.
     */
    limit?: number
  }

  /**
   * TrainingSession updateManyAndReturn
   */
  export type TrainingSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * The data used to update TrainingSessions.
     */
    data: XOR<TrainingSessionUpdateManyMutationInput, TrainingSessionUncheckedUpdateManyInput>
    /**
     * Filter which TrainingSessions to update
     */
    where?: TrainingSessionWhereInput
    /**
     * Limit how many TrainingSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainingSession upsert
   */
  export type TrainingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainingSession to update in case it exists.
     */
    where: TrainingSessionWhereUniqueInput
    /**
     * In case the TrainingSession found by the `where` argument doesn't exist, create a new TrainingSession with this data.
     */
    create: XOR<TrainingSessionCreateInput, TrainingSessionUncheckedCreateInput>
    /**
     * In case the TrainingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainingSessionUpdateInput, TrainingSessionUncheckedUpdateInput>
  }

  /**
   * TrainingSession delete
   */
  export type TrainingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
    /**
     * Filter which TrainingSession to delete.
     */
    where: TrainingSessionWhereUniqueInput
  }

  /**
   * TrainingSession deleteMany
   */
  export type TrainingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainingSessions to delete
     */
    where?: TrainingSessionWhereInput
    /**
     * Limit how many TrainingSessions to delete.
     */
    limit?: number
  }

  /**
   * TrainingSession.bookings
   */
  export type TrainingSession$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * TrainingSession without action
   */
  export type TrainingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingSession
     */
    select?: TrainingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainingSession
     */
    omit?: TrainingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainingSessionInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    coinsUsed: number | null
  }

  export type BookingSumAggregateOutputType = {
    coinsUsed: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    trainingSessionId: string | null
    status: $Enums.BookingStatus | null
    coinsUsed: number | null
    bookedAt: Date | null
    cancelledAt: Date | null
    attendedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    trainingSessionId: string | null
    status: $Enums.BookingStatus | null
    coinsUsed: number | null
    bookedAt: Date | null
    cancelledAt: Date | null
    attendedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    trainingSessionId: number
    status: number
    coinsUsed: number
    bookedAt: number
    cancelledAt: number
    attendedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    coinsUsed?: true
  }

  export type BookingSumAggregateInputType = {
    coinsUsed?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    trainingSessionId?: true
    status?: true
    coinsUsed?: true
    bookedAt?: true
    cancelledAt?: true
    attendedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    trainingSessionId?: true
    status?: true
    coinsUsed?: true
    bookedAt?: true
    cancelledAt?: true
    attendedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    trainingSessionId?: true
    status?: true
    coinsUsed?: true
    bookedAt?: true
    cancelledAt?: true
    attendedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    trainingSessionId: string
    status: $Enums.BookingStatus
    coinsUsed: number
    bookedAt: Date
    cancelledAt: Date | null
    attendedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trainingSessionId?: boolean
    status?: boolean
    coinsUsed?: boolean
    bookedAt?: boolean
    cancelledAt?: boolean
    attendedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    trainingSession?: boolean | TrainingSessionDefaultArgs<ExtArgs>
    coinsTransactions?: boolean | Booking$coinsTransactionsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trainingSessionId?: boolean
    status?: boolean
    coinsUsed?: boolean
    bookedAt?: boolean
    cancelledAt?: boolean
    attendedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    trainingSession?: boolean | TrainingSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trainingSessionId?: boolean
    status?: boolean
    coinsUsed?: boolean
    bookedAt?: boolean
    cancelledAt?: boolean
    attendedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    trainingSession?: boolean | TrainingSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    trainingSessionId?: boolean
    status?: boolean
    coinsUsed?: boolean
    bookedAt?: boolean
    cancelledAt?: boolean
    attendedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "trainingSessionId" | "status" | "coinsUsed" | "bookedAt" | "cancelledAt" | "attendedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    trainingSession?: boolean | TrainingSessionDefaultArgs<ExtArgs>
    coinsTransactions?: boolean | Booking$coinsTransactionsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    trainingSession?: boolean | TrainingSessionDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    trainingSession?: boolean | TrainingSessionDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      trainingSession: Prisma.$TrainingSessionPayload<ExtArgs>
      coinsTransactions: Prisma.$CoinsTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      trainingSessionId: string
      status: $Enums.BookingStatus
      coinsUsed: number
      bookedAt: Date
      cancelledAt: Date | null
      attendedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trainingSession<T extends TrainingSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainingSessionDefaultArgs<ExtArgs>>): Prisma__TrainingSessionClient<$Result.GetResult<Prisma.$TrainingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coinsTransactions<T extends Booking$coinsTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$coinsTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly trainingSessionId: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly coinsUsed: FieldRef<"Booking", 'Int'>
    readonly bookedAt: FieldRef<"Booking", 'DateTime'>
    readonly cancelledAt: FieldRef<"Booking", 'DateTime'>
    readonly attendedAt: FieldRef<"Booking", 'DateTime'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.coinsTransactions
   */
  export type Booking$coinsTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    where?: CoinsTransactionWhereInput
    orderBy?: CoinsTransactionOrderByWithRelationInput | CoinsTransactionOrderByWithRelationInput[]
    cursor?: CoinsTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoinsTransactionScalarFieldEnum | CoinsTransactionScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model CoinsTransaction
   */

  export type AggregateCoinsTransaction = {
    _count: CoinsTransactionCountAggregateOutputType | null
    _avg: CoinsTransactionAvgAggregateOutputType | null
    _sum: CoinsTransactionSumAggregateOutputType | null
    _min: CoinsTransactionMinAggregateOutputType | null
    _max: CoinsTransactionMaxAggregateOutputType | null
  }

  export type CoinsTransactionAvgAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type CoinsTransactionSumAggregateOutputType = {
    amount: number | null
    balanceAfter: number | null
  }

  export type CoinsTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    type: $Enums.CoinsTransactionType | null
    description: string | null
    balanceAfter: number | null
    relatedBookingId: string | null
    orderId: string | null
    createdAt: Date | null
  }

  export type CoinsTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    type: $Enums.CoinsTransactionType | null
    description: string | null
    balanceAfter: number | null
    relatedBookingId: string | null
    orderId: string | null
    createdAt: Date | null
  }

  export type CoinsTransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    type: number
    description: number
    balanceAfter: number
    relatedBookingId: number
    orderId: number
    createdAt: number
    _all: number
  }


  export type CoinsTransactionAvgAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type CoinsTransactionSumAggregateInputType = {
    amount?: true
    balanceAfter?: true
  }

  export type CoinsTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    description?: true
    balanceAfter?: true
    relatedBookingId?: true
    orderId?: true
    createdAt?: true
  }

  export type CoinsTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    description?: true
    balanceAfter?: true
    relatedBookingId?: true
    orderId?: true
    createdAt?: true
  }

  export type CoinsTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    description?: true
    balanceAfter?: true
    relatedBookingId?: true
    orderId?: true
    createdAt?: true
    _all?: true
  }

  export type CoinsTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinsTransaction to aggregate.
     */
    where?: CoinsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsTransactions to fetch.
     */
    orderBy?: CoinsTransactionOrderByWithRelationInput | CoinsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoinsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoinsTransactions
    **/
    _count?: true | CoinsTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoinsTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoinsTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoinsTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoinsTransactionMaxAggregateInputType
  }

  export type GetCoinsTransactionAggregateType<T extends CoinsTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCoinsTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoinsTransaction[P]>
      : GetScalarType<T[P], AggregateCoinsTransaction[P]>
  }




  export type CoinsTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinsTransactionWhereInput
    orderBy?: CoinsTransactionOrderByWithAggregationInput | CoinsTransactionOrderByWithAggregationInput[]
    by: CoinsTransactionScalarFieldEnum[] | CoinsTransactionScalarFieldEnum
    having?: CoinsTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoinsTransactionCountAggregateInputType | true
    _avg?: CoinsTransactionAvgAggregateInputType
    _sum?: CoinsTransactionSumAggregateInputType
    _min?: CoinsTransactionMinAggregateInputType
    _max?: CoinsTransactionMaxAggregateInputType
  }

  export type CoinsTransactionGroupByOutputType = {
    id: string
    userId: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    relatedBookingId: string | null
    orderId: string | null
    createdAt: Date
    _count: CoinsTransactionCountAggregateOutputType | null
    _avg: CoinsTransactionAvgAggregateOutputType | null
    _sum: CoinsTransactionSumAggregateOutputType | null
    _min: CoinsTransactionMinAggregateOutputType | null
    _max: CoinsTransactionMaxAggregateOutputType | null
  }

  type GetCoinsTransactionGroupByPayload<T extends CoinsTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoinsTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoinsTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoinsTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CoinsTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CoinsTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    balanceAfter?: boolean
    relatedBookingId?: boolean
    orderId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    relatedBooking?: boolean | CoinsTransaction$relatedBookingArgs<ExtArgs>
    coinsPurchase?: boolean | CoinsTransaction$coinsPurchaseArgs<ExtArgs>
  }, ExtArgs["result"]["coinsTransaction"]>

  export type CoinsTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    balanceAfter?: boolean
    relatedBookingId?: boolean
    orderId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    relatedBooking?: boolean | CoinsTransaction$relatedBookingArgs<ExtArgs>
    coinsPurchase?: boolean | CoinsTransaction$coinsPurchaseArgs<ExtArgs>
  }, ExtArgs["result"]["coinsTransaction"]>

  export type CoinsTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    balanceAfter?: boolean
    relatedBookingId?: boolean
    orderId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    relatedBooking?: boolean | CoinsTransaction$relatedBookingArgs<ExtArgs>
    coinsPurchase?: boolean | CoinsTransaction$coinsPurchaseArgs<ExtArgs>
  }, ExtArgs["result"]["coinsTransaction"]>

  export type CoinsTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    balanceAfter?: boolean
    relatedBookingId?: boolean
    orderId?: boolean
    createdAt?: boolean
  }

  export type CoinsTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "type" | "description" | "balanceAfter" | "relatedBookingId" | "orderId" | "createdAt", ExtArgs["result"]["coinsTransaction"]>
  export type CoinsTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    relatedBooking?: boolean | CoinsTransaction$relatedBookingArgs<ExtArgs>
    coinsPurchase?: boolean | CoinsTransaction$coinsPurchaseArgs<ExtArgs>
  }
  export type CoinsTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    relatedBooking?: boolean | CoinsTransaction$relatedBookingArgs<ExtArgs>
    coinsPurchase?: boolean | CoinsTransaction$coinsPurchaseArgs<ExtArgs>
  }
  export type CoinsTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    relatedBooking?: boolean | CoinsTransaction$relatedBookingArgs<ExtArgs>
    coinsPurchase?: boolean | CoinsTransaction$coinsPurchaseArgs<ExtArgs>
  }

  export type $CoinsTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoinsTransaction"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      relatedBooking: Prisma.$BookingPayload<ExtArgs> | null
      coinsPurchase: Prisma.$CoinsPurchasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      type: $Enums.CoinsTransactionType
      description: string
      balanceAfter: number
      relatedBookingId: string | null
      orderId: string | null
      createdAt: Date
    }, ExtArgs["result"]["coinsTransaction"]>
    composites: {}
  }

  type CoinsTransactionGetPayload<S extends boolean | null | undefined | CoinsTransactionDefaultArgs> = $Result.GetResult<Prisma.$CoinsTransactionPayload, S>

  type CoinsTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoinsTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoinsTransactionCountAggregateInputType | true
    }

  export interface CoinsTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoinsTransaction'], meta: { name: 'CoinsTransaction' } }
    /**
     * Find zero or one CoinsTransaction that matches the filter.
     * @param {CoinsTransactionFindUniqueArgs} args - Arguments to find a CoinsTransaction
     * @example
     * // Get one CoinsTransaction
     * const coinsTransaction = await prisma.coinsTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoinsTransactionFindUniqueArgs>(args: SelectSubset<T, CoinsTransactionFindUniqueArgs<ExtArgs>>): Prisma__CoinsTransactionClient<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoinsTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoinsTransactionFindUniqueOrThrowArgs} args - Arguments to find a CoinsTransaction
     * @example
     * // Get one CoinsTransaction
     * const coinsTransaction = await prisma.coinsTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoinsTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CoinsTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoinsTransactionClient<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoinsTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsTransactionFindFirstArgs} args - Arguments to find a CoinsTransaction
     * @example
     * // Get one CoinsTransaction
     * const coinsTransaction = await prisma.coinsTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoinsTransactionFindFirstArgs>(args?: SelectSubset<T, CoinsTransactionFindFirstArgs<ExtArgs>>): Prisma__CoinsTransactionClient<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoinsTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsTransactionFindFirstOrThrowArgs} args - Arguments to find a CoinsTransaction
     * @example
     * // Get one CoinsTransaction
     * const coinsTransaction = await prisma.coinsTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoinsTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CoinsTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoinsTransactionClient<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoinsTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoinsTransactions
     * const coinsTransactions = await prisma.coinsTransaction.findMany()
     * 
     * // Get first 10 CoinsTransactions
     * const coinsTransactions = await prisma.coinsTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coinsTransactionWithIdOnly = await prisma.coinsTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoinsTransactionFindManyArgs>(args?: SelectSubset<T, CoinsTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoinsTransaction.
     * @param {CoinsTransactionCreateArgs} args - Arguments to create a CoinsTransaction.
     * @example
     * // Create one CoinsTransaction
     * const CoinsTransaction = await prisma.coinsTransaction.create({
     *   data: {
     *     // ... data to create a CoinsTransaction
     *   }
     * })
     * 
     */
    create<T extends CoinsTransactionCreateArgs>(args: SelectSubset<T, CoinsTransactionCreateArgs<ExtArgs>>): Prisma__CoinsTransactionClient<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoinsTransactions.
     * @param {CoinsTransactionCreateManyArgs} args - Arguments to create many CoinsTransactions.
     * @example
     * // Create many CoinsTransactions
     * const coinsTransaction = await prisma.coinsTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoinsTransactionCreateManyArgs>(args?: SelectSubset<T, CoinsTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoinsTransactions and returns the data saved in the database.
     * @param {CoinsTransactionCreateManyAndReturnArgs} args - Arguments to create many CoinsTransactions.
     * @example
     * // Create many CoinsTransactions
     * const coinsTransaction = await prisma.coinsTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoinsTransactions and only return the `id`
     * const coinsTransactionWithIdOnly = await prisma.coinsTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoinsTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, CoinsTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoinsTransaction.
     * @param {CoinsTransactionDeleteArgs} args - Arguments to delete one CoinsTransaction.
     * @example
     * // Delete one CoinsTransaction
     * const CoinsTransaction = await prisma.coinsTransaction.delete({
     *   where: {
     *     // ... filter to delete one CoinsTransaction
     *   }
     * })
     * 
     */
    delete<T extends CoinsTransactionDeleteArgs>(args: SelectSubset<T, CoinsTransactionDeleteArgs<ExtArgs>>): Prisma__CoinsTransactionClient<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoinsTransaction.
     * @param {CoinsTransactionUpdateArgs} args - Arguments to update one CoinsTransaction.
     * @example
     * // Update one CoinsTransaction
     * const coinsTransaction = await prisma.coinsTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoinsTransactionUpdateArgs>(args: SelectSubset<T, CoinsTransactionUpdateArgs<ExtArgs>>): Prisma__CoinsTransactionClient<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoinsTransactions.
     * @param {CoinsTransactionDeleteManyArgs} args - Arguments to filter CoinsTransactions to delete.
     * @example
     * // Delete a few CoinsTransactions
     * const { count } = await prisma.coinsTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoinsTransactionDeleteManyArgs>(args?: SelectSubset<T, CoinsTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinsTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoinsTransactions
     * const coinsTransaction = await prisma.coinsTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoinsTransactionUpdateManyArgs>(args: SelectSubset<T, CoinsTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinsTransactions and returns the data updated in the database.
     * @param {CoinsTransactionUpdateManyAndReturnArgs} args - Arguments to update many CoinsTransactions.
     * @example
     * // Update many CoinsTransactions
     * const coinsTransaction = await prisma.coinsTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoinsTransactions and only return the `id`
     * const coinsTransactionWithIdOnly = await prisma.coinsTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoinsTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, CoinsTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoinsTransaction.
     * @param {CoinsTransactionUpsertArgs} args - Arguments to update or create a CoinsTransaction.
     * @example
     * // Update or create a CoinsTransaction
     * const coinsTransaction = await prisma.coinsTransaction.upsert({
     *   create: {
     *     // ... data to create a CoinsTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoinsTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CoinsTransactionUpsertArgs>(args: SelectSubset<T, CoinsTransactionUpsertArgs<ExtArgs>>): Prisma__CoinsTransactionClient<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoinsTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsTransactionCountArgs} args - Arguments to filter CoinsTransactions to count.
     * @example
     * // Count the number of CoinsTransactions
     * const count = await prisma.coinsTransaction.count({
     *   where: {
     *     // ... the filter for the CoinsTransactions we want to count
     *   }
     * })
    **/
    count<T extends CoinsTransactionCountArgs>(
      args?: Subset<T, CoinsTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoinsTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoinsTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoinsTransactionAggregateArgs>(args: Subset<T, CoinsTransactionAggregateArgs>): Prisma.PrismaPromise<GetCoinsTransactionAggregateType<T>>

    /**
     * Group by CoinsTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoinsTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinsTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CoinsTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoinsTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoinsTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoinsTransaction model
   */
  readonly fields: CoinsTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoinsTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinsTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relatedBooking<T extends CoinsTransaction$relatedBookingArgs<ExtArgs> = {}>(args?: Subset<T, CoinsTransaction$relatedBookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coinsPurchase<T extends CoinsTransaction$coinsPurchaseArgs<ExtArgs> = {}>(args?: Subset<T, CoinsTransaction$coinsPurchaseArgs<ExtArgs>>): Prisma__CoinsPurchaseClient<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoinsTransaction model
   */
  interface CoinsTransactionFieldRefs {
    readonly id: FieldRef<"CoinsTransaction", 'String'>
    readonly userId: FieldRef<"CoinsTransaction", 'String'>
    readonly amount: FieldRef<"CoinsTransaction", 'Int'>
    readonly type: FieldRef<"CoinsTransaction", 'CoinsTransactionType'>
    readonly description: FieldRef<"CoinsTransaction", 'String'>
    readonly balanceAfter: FieldRef<"CoinsTransaction", 'Int'>
    readonly relatedBookingId: FieldRef<"CoinsTransaction", 'String'>
    readonly orderId: FieldRef<"CoinsTransaction", 'String'>
    readonly createdAt: FieldRef<"CoinsTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoinsTransaction findUnique
   */
  export type CoinsTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinsTransaction to fetch.
     */
    where: CoinsTransactionWhereUniqueInput
  }

  /**
   * CoinsTransaction findUniqueOrThrow
   */
  export type CoinsTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinsTransaction to fetch.
     */
    where: CoinsTransactionWhereUniqueInput
  }

  /**
   * CoinsTransaction findFirst
   */
  export type CoinsTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinsTransaction to fetch.
     */
    where?: CoinsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsTransactions to fetch.
     */
    orderBy?: CoinsTransactionOrderByWithRelationInput | CoinsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinsTransactions.
     */
    cursor?: CoinsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinsTransactions.
     */
    distinct?: CoinsTransactionScalarFieldEnum | CoinsTransactionScalarFieldEnum[]
  }

  /**
   * CoinsTransaction findFirstOrThrow
   */
  export type CoinsTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinsTransaction to fetch.
     */
    where?: CoinsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsTransactions to fetch.
     */
    orderBy?: CoinsTransactionOrderByWithRelationInput | CoinsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinsTransactions.
     */
    cursor?: CoinsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinsTransactions.
     */
    distinct?: CoinsTransactionScalarFieldEnum | CoinsTransactionScalarFieldEnum[]
  }

  /**
   * CoinsTransaction findMany
   */
  export type CoinsTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CoinsTransactions to fetch.
     */
    where?: CoinsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsTransactions to fetch.
     */
    orderBy?: CoinsTransactionOrderByWithRelationInput | CoinsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoinsTransactions.
     */
    cursor?: CoinsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsTransactions.
     */
    skip?: number
    distinct?: CoinsTransactionScalarFieldEnum | CoinsTransactionScalarFieldEnum[]
  }

  /**
   * CoinsTransaction create
   */
  export type CoinsTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CoinsTransaction.
     */
    data: XOR<CoinsTransactionCreateInput, CoinsTransactionUncheckedCreateInput>
  }

  /**
   * CoinsTransaction createMany
   */
  export type CoinsTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoinsTransactions.
     */
    data: CoinsTransactionCreateManyInput | CoinsTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoinsTransaction createManyAndReturn
   */
  export type CoinsTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many CoinsTransactions.
     */
    data: CoinsTransactionCreateManyInput | CoinsTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoinsTransaction update
   */
  export type CoinsTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CoinsTransaction.
     */
    data: XOR<CoinsTransactionUpdateInput, CoinsTransactionUncheckedUpdateInput>
    /**
     * Choose, which CoinsTransaction to update.
     */
    where: CoinsTransactionWhereUniqueInput
  }

  /**
   * CoinsTransaction updateMany
   */
  export type CoinsTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoinsTransactions.
     */
    data: XOR<CoinsTransactionUpdateManyMutationInput, CoinsTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CoinsTransactions to update
     */
    where?: CoinsTransactionWhereInput
    /**
     * Limit how many CoinsTransactions to update.
     */
    limit?: number
  }

  /**
   * CoinsTransaction updateManyAndReturn
   */
  export type CoinsTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * The data used to update CoinsTransactions.
     */
    data: XOR<CoinsTransactionUpdateManyMutationInput, CoinsTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CoinsTransactions to update
     */
    where?: CoinsTransactionWhereInput
    /**
     * Limit how many CoinsTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoinsTransaction upsert
   */
  export type CoinsTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CoinsTransaction to update in case it exists.
     */
    where: CoinsTransactionWhereUniqueInput
    /**
     * In case the CoinsTransaction found by the `where` argument doesn't exist, create a new CoinsTransaction with this data.
     */
    create: XOR<CoinsTransactionCreateInput, CoinsTransactionUncheckedCreateInput>
    /**
     * In case the CoinsTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoinsTransactionUpdateInput, CoinsTransactionUncheckedUpdateInput>
  }

  /**
   * CoinsTransaction delete
   */
  export type CoinsTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    /**
     * Filter which CoinsTransaction to delete.
     */
    where: CoinsTransactionWhereUniqueInput
  }

  /**
   * CoinsTransaction deleteMany
   */
  export type CoinsTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinsTransactions to delete
     */
    where?: CoinsTransactionWhereInput
    /**
     * Limit how many CoinsTransactions to delete.
     */
    limit?: number
  }

  /**
   * CoinsTransaction.relatedBooking
   */
  export type CoinsTransaction$relatedBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * CoinsTransaction.coinsPurchase
   */
  export type CoinsTransaction$coinsPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    where?: CoinsPurchaseWhereInput
  }

  /**
   * CoinsTransaction without action
   */
  export type CoinsTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
  }


  /**
   * Model CoinsPurchase
   */

  export type AggregateCoinsPurchase = {
    _count: CoinsPurchaseCountAggregateOutputType | null
    _avg: CoinsPurchaseAvgAggregateOutputType | null
    _sum: CoinsPurchaseSumAggregateOutputType | null
    _min: CoinsPurchaseMinAggregateOutputType | null
    _max: CoinsPurchaseMaxAggregateOutputType | null
  }

  export type CoinsPurchaseAvgAggregateOutputType = {
    quantity: number | null
    totalPrice: Decimal | null
  }

  export type CoinsPurchaseSumAggregateOutputType = {
    quantity: number | null
    totalPrice: Decimal | null
  }

  export type CoinsPurchaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    coinsPackageId: string | null
    quantity: number | null
    totalPrice: Decimal | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentMethod: string | null
    paymentIntentId: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type CoinsPurchaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    coinsPackageId: string | null
    quantity: number | null
    totalPrice: Decimal | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentMethod: string | null
    paymentIntentId: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type CoinsPurchaseCountAggregateOutputType = {
    id: number
    userId: number
    coinsPackageId: number
    quantity: number
    totalPrice: number
    paymentStatus: number
    paymentMethod: number
    paymentIntentId: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type CoinsPurchaseAvgAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type CoinsPurchaseSumAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type CoinsPurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    coinsPackageId?: true
    quantity?: true
    totalPrice?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentIntentId?: true
    createdAt?: true
    completedAt?: true
  }

  export type CoinsPurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    coinsPackageId?: true
    quantity?: true
    totalPrice?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentIntentId?: true
    createdAt?: true
    completedAt?: true
  }

  export type CoinsPurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    coinsPackageId?: true
    quantity?: true
    totalPrice?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentIntentId?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type CoinsPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinsPurchase to aggregate.
     */
    where?: CoinsPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsPurchases to fetch.
     */
    orderBy?: CoinsPurchaseOrderByWithRelationInput | CoinsPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoinsPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoinsPurchases
    **/
    _count?: true | CoinsPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoinsPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoinsPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoinsPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoinsPurchaseMaxAggregateInputType
  }

  export type GetCoinsPurchaseAggregateType<T extends CoinsPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCoinsPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoinsPurchase[P]>
      : GetScalarType<T[P], AggregateCoinsPurchase[P]>
  }




  export type CoinsPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinsPurchaseWhereInput
    orderBy?: CoinsPurchaseOrderByWithAggregationInput | CoinsPurchaseOrderByWithAggregationInput[]
    by: CoinsPurchaseScalarFieldEnum[] | CoinsPurchaseScalarFieldEnum
    having?: CoinsPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoinsPurchaseCountAggregateInputType | true
    _avg?: CoinsPurchaseAvgAggregateInputType
    _sum?: CoinsPurchaseSumAggregateInputType
    _min?: CoinsPurchaseMinAggregateInputType
    _max?: CoinsPurchaseMaxAggregateInputType
  }

  export type CoinsPurchaseGroupByOutputType = {
    id: string
    userId: string
    coinsPackageId: string
    quantity: number
    totalPrice: Decimal
    paymentStatus: $Enums.PaymentStatus
    paymentMethod: string | null
    paymentIntentId: string | null
    createdAt: Date
    completedAt: Date | null
    _count: CoinsPurchaseCountAggregateOutputType | null
    _avg: CoinsPurchaseAvgAggregateOutputType | null
    _sum: CoinsPurchaseSumAggregateOutputType | null
    _min: CoinsPurchaseMinAggregateOutputType | null
    _max: CoinsPurchaseMaxAggregateOutputType | null
  }

  type GetCoinsPurchaseGroupByPayload<T extends CoinsPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoinsPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoinsPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoinsPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], CoinsPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type CoinsPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coinsPackageId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentIntentId?: boolean
    createdAt?: boolean
    completedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    coinsPackage?: boolean | CoinsPackageDefaultArgs<ExtArgs>
    coinsTransaction?: boolean | CoinsPurchase$coinsTransactionArgs<ExtArgs>
  }, ExtArgs["result"]["coinsPurchase"]>

  export type CoinsPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coinsPackageId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentIntentId?: boolean
    createdAt?: boolean
    completedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    coinsPackage?: boolean | CoinsPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coinsPurchase"]>

  export type CoinsPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    coinsPackageId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentIntentId?: boolean
    createdAt?: boolean
    completedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    coinsPackage?: boolean | CoinsPackageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coinsPurchase"]>

  export type CoinsPurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    coinsPackageId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentIntentId?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type CoinsPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "coinsPackageId" | "quantity" | "totalPrice" | "paymentStatus" | "paymentMethod" | "paymentIntentId" | "createdAt" | "completedAt", ExtArgs["result"]["coinsPurchase"]>
  export type CoinsPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    coinsPackage?: boolean | CoinsPackageDefaultArgs<ExtArgs>
    coinsTransaction?: boolean | CoinsPurchase$coinsTransactionArgs<ExtArgs>
  }
  export type CoinsPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    coinsPackage?: boolean | CoinsPackageDefaultArgs<ExtArgs>
  }
  export type CoinsPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    coinsPackage?: boolean | CoinsPackageDefaultArgs<ExtArgs>
  }

  export type $CoinsPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoinsPurchase"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      coinsPackage: Prisma.$CoinsPackagePayload<ExtArgs>
      coinsTransaction: Prisma.$CoinsTransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      coinsPackageId: string
      quantity: number
      totalPrice: Prisma.Decimal
      paymentStatus: $Enums.PaymentStatus
      paymentMethod: string | null
      paymentIntentId: string | null
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["coinsPurchase"]>
    composites: {}
  }

  type CoinsPurchaseGetPayload<S extends boolean | null | undefined | CoinsPurchaseDefaultArgs> = $Result.GetResult<Prisma.$CoinsPurchasePayload, S>

  type CoinsPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoinsPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoinsPurchaseCountAggregateInputType | true
    }

  export interface CoinsPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoinsPurchase'], meta: { name: 'CoinsPurchase' } }
    /**
     * Find zero or one CoinsPurchase that matches the filter.
     * @param {CoinsPurchaseFindUniqueArgs} args - Arguments to find a CoinsPurchase
     * @example
     * // Get one CoinsPurchase
     * const coinsPurchase = await prisma.coinsPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoinsPurchaseFindUniqueArgs>(args: SelectSubset<T, CoinsPurchaseFindUniqueArgs<ExtArgs>>): Prisma__CoinsPurchaseClient<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoinsPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoinsPurchaseFindUniqueOrThrowArgs} args - Arguments to find a CoinsPurchase
     * @example
     * // Get one CoinsPurchase
     * const coinsPurchase = await prisma.coinsPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoinsPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CoinsPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoinsPurchaseClient<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoinsPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPurchaseFindFirstArgs} args - Arguments to find a CoinsPurchase
     * @example
     * // Get one CoinsPurchase
     * const coinsPurchase = await prisma.coinsPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoinsPurchaseFindFirstArgs>(args?: SelectSubset<T, CoinsPurchaseFindFirstArgs<ExtArgs>>): Prisma__CoinsPurchaseClient<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoinsPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPurchaseFindFirstOrThrowArgs} args - Arguments to find a CoinsPurchase
     * @example
     * // Get one CoinsPurchase
     * const coinsPurchase = await prisma.coinsPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoinsPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CoinsPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoinsPurchaseClient<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoinsPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoinsPurchases
     * const coinsPurchases = await prisma.coinsPurchase.findMany()
     * 
     * // Get first 10 CoinsPurchases
     * const coinsPurchases = await prisma.coinsPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coinsPurchaseWithIdOnly = await prisma.coinsPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoinsPurchaseFindManyArgs>(args?: SelectSubset<T, CoinsPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoinsPurchase.
     * @param {CoinsPurchaseCreateArgs} args - Arguments to create a CoinsPurchase.
     * @example
     * // Create one CoinsPurchase
     * const CoinsPurchase = await prisma.coinsPurchase.create({
     *   data: {
     *     // ... data to create a CoinsPurchase
     *   }
     * })
     * 
     */
    create<T extends CoinsPurchaseCreateArgs>(args: SelectSubset<T, CoinsPurchaseCreateArgs<ExtArgs>>): Prisma__CoinsPurchaseClient<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoinsPurchases.
     * @param {CoinsPurchaseCreateManyArgs} args - Arguments to create many CoinsPurchases.
     * @example
     * // Create many CoinsPurchases
     * const coinsPurchase = await prisma.coinsPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoinsPurchaseCreateManyArgs>(args?: SelectSubset<T, CoinsPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoinsPurchases and returns the data saved in the database.
     * @param {CoinsPurchaseCreateManyAndReturnArgs} args - Arguments to create many CoinsPurchases.
     * @example
     * // Create many CoinsPurchases
     * const coinsPurchase = await prisma.coinsPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoinsPurchases and only return the `id`
     * const coinsPurchaseWithIdOnly = await prisma.coinsPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoinsPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, CoinsPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoinsPurchase.
     * @param {CoinsPurchaseDeleteArgs} args - Arguments to delete one CoinsPurchase.
     * @example
     * // Delete one CoinsPurchase
     * const CoinsPurchase = await prisma.coinsPurchase.delete({
     *   where: {
     *     // ... filter to delete one CoinsPurchase
     *   }
     * })
     * 
     */
    delete<T extends CoinsPurchaseDeleteArgs>(args: SelectSubset<T, CoinsPurchaseDeleteArgs<ExtArgs>>): Prisma__CoinsPurchaseClient<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoinsPurchase.
     * @param {CoinsPurchaseUpdateArgs} args - Arguments to update one CoinsPurchase.
     * @example
     * // Update one CoinsPurchase
     * const coinsPurchase = await prisma.coinsPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoinsPurchaseUpdateArgs>(args: SelectSubset<T, CoinsPurchaseUpdateArgs<ExtArgs>>): Prisma__CoinsPurchaseClient<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoinsPurchases.
     * @param {CoinsPurchaseDeleteManyArgs} args - Arguments to filter CoinsPurchases to delete.
     * @example
     * // Delete a few CoinsPurchases
     * const { count } = await prisma.coinsPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoinsPurchaseDeleteManyArgs>(args?: SelectSubset<T, CoinsPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinsPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoinsPurchases
     * const coinsPurchase = await prisma.coinsPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoinsPurchaseUpdateManyArgs>(args: SelectSubset<T, CoinsPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinsPurchases and returns the data updated in the database.
     * @param {CoinsPurchaseUpdateManyAndReturnArgs} args - Arguments to update many CoinsPurchases.
     * @example
     * // Update many CoinsPurchases
     * const coinsPurchase = await prisma.coinsPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoinsPurchases and only return the `id`
     * const coinsPurchaseWithIdOnly = await prisma.coinsPurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoinsPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, CoinsPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoinsPurchase.
     * @param {CoinsPurchaseUpsertArgs} args - Arguments to update or create a CoinsPurchase.
     * @example
     * // Update or create a CoinsPurchase
     * const coinsPurchase = await prisma.coinsPurchase.upsert({
     *   create: {
     *     // ... data to create a CoinsPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoinsPurchase we want to update
     *   }
     * })
     */
    upsert<T extends CoinsPurchaseUpsertArgs>(args: SelectSubset<T, CoinsPurchaseUpsertArgs<ExtArgs>>): Prisma__CoinsPurchaseClient<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoinsPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPurchaseCountArgs} args - Arguments to filter CoinsPurchases to count.
     * @example
     * // Count the number of CoinsPurchases
     * const count = await prisma.coinsPurchase.count({
     *   where: {
     *     // ... the filter for the CoinsPurchases we want to count
     *   }
     * })
    **/
    count<T extends CoinsPurchaseCountArgs>(
      args?: Subset<T, CoinsPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoinsPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoinsPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoinsPurchaseAggregateArgs>(args: Subset<T, CoinsPurchaseAggregateArgs>): Prisma.PrismaPromise<GetCoinsPurchaseAggregateType<T>>

    /**
     * Group by CoinsPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoinsPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinsPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: CoinsPurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoinsPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoinsPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoinsPurchase model
   */
  readonly fields: CoinsPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoinsPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinsPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coinsPackage<T extends CoinsPackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoinsPackageDefaultArgs<ExtArgs>>): Prisma__CoinsPackageClient<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coinsTransaction<T extends CoinsPurchase$coinsTransactionArgs<ExtArgs> = {}>(args?: Subset<T, CoinsPurchase$coinsTransactionArgs<ExtArgs>>): Prisma__CoinsTransactionClient<$Result.GetResult<Prisma.$CoinsTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoinsPurchase model
   */
  interface CoinsPurchaseFieldRefs {
    readonly id: FieldRef<"CoinsPurchase", 'String'>
    readonly userId: FieldRef<"CoinsPurchase", 'String'>
    readonly coinsPackageId: FieldRef<"CoinsPurchase", 'String'>
    readonly quantity: FieldRef<"CoinsPurchase", 'Int'>
    readonly totalPrice: FieldRef<"CoinsPurchase", 'Decimal'>
    readonly paymentStatus: FieldRef<"CoinsPurchase", 'PaymentStatus'>
    readonly paymentMethod: FieldRef<"CoinsPurchase", 'String'>
    readonly paymentIntentId: FieldRef<"CoinsPurchase", 'String'>
    readonly createdAt: FieldRef<"CoinsPurchase", 'DateTime'>
    readonly completedAt: FieldRef<"CoinsPurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoinsPurchase findUnique
   */
  export type CoinsPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoinsPurchase to fetch.
     */
    where: CoinsPurchaseWhereUniqueInput
  }

  /**
   * CoinsPurchase findUniqueOrThrow
   */
  export type CoinsPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoinsPurchase to fetch.
     */
    where: CoinsPurchaseWhereUniqueInput
  }

  /**
   * CoinsPurchase findFirst
   */
  export type CoinsPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoinsPurchase to fetch.
     */
    where?: CoinsPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsPurchases to fetch.
     */
    orderBy?: CoinsPurchaseOrderByWithRelationInput | CoinsPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinsPurchases.
     */
    cursor?: CoinsPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinsPurchases.
     */
    distinct?: CoinsPurchaseScalarFieldEnum | CoinsPurchaseScalarFieldEnum[]
  }

  /**
   * CoinsPurchase findFirstOrThrow
   */
  export type CoinsPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoinsPurchase to fetch.
     */
    where?: CoinsPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsPurchases to fetch.
     */
    orderBy?: CoinsPurchaseOrderByWithRelationInput | CoinsPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinsPurchases.
     */
    cursor?: CoinsPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinsPurchases.
     */
    distinct?: CoinsPurchaseScalarFieldEnum | CoinsPurchaseScalarFieldEnum[]
  }

  /**
   * CoinsPurchase findMany
   */
  export type CoinsPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoinsPurchases to fetch.
     */
    where?: CoinsPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsPurchases to fetch.
     */
    orderBy?: CoinsPurchaseOrderByWithRelationInput | CoinsPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoinsPurchases.
     */
    cursor?: CoinsPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsPurchases.
     */
    skip?: number
    distinct?: CoinsPurchaseScalarFieldEnum | CoinsPurchaseScalarFieldEnum[]
  }

  /**
   * CoinsPurchase create
   */
  export type CoinsPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a CoinsPurchase.
     */
    data: XOR<CoinsPurchaseCreateInput, CoinsPurchaseUncheckedCreateInput>
  }

  /**
   * CoinsPurchase createMany
   */
  export type CoinsPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoinsPurchases.
     */
    data: CoinsPurchaseCreateManyInput | CoinsPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoinsPurchase createManyAndReturn
   */
  export type CoinsPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many CoinsPurchases.
     */
    data: CoinsPurchaseCreateManyInput | CoinsPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoinsPurchase update
   */
  export type CoinsPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a CoinsPurchase.
     */
    data: XOR<CoinsPurchaseUpdateInput, CoinsPurchaseUncheckedUpdateInput>
    /**
     * Choose, which CoinsPurchase to update.
     */
    where: CoinsPurchaseWhereUniqueInput
  }

  /**
   * CoinsPurchase updateMany
   */
  export type CoinsPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoinsPurchases.
     */
    data: XOR<CoinsPurchaseUpdateManyMutationInput, CoinsPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which CoinsPurchases to update
     */
    where?: CoinsPurchaseWhereInput
    /**
     * Limit how many CoinsPurchases to update.
     */
    limit?: number
  }

  /**
   * CoinsPurchase updateManyAndReturn
   */
  export type CoinsPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update CoinsPurchases.
     */
    data: XOR<CoinsPurchaseUpdateManyMutationInput, CoinsPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which CoinsPurchases to update
     */
    where?: CoinsPurchaseWhereInput
    /**
     * Limit how many CoinsPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoinsPurchase upsert
   */
  export type CoinsPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the CoinsPurchase to update in case it exists.
     */
    where: CoinsPurchaseWhereUniqueInput
    /**
     * In case the CoinsPurchase found by the `where` argument doesn't exist, create a new CoinsPurchase with this data.
     */
    create: XOR<CoinsPurchaseCreateInput, CoinsPurchaseUncheckedCreateInput>
    /**
     * In case the CoinsPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoinsPurchaseUpdateInput, CoinsPurchaseUncheckedUpdateInput>
  }

  /**
   * CoinsPurchase delete
   */
  export type CoinsPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    /**
     * Filter which CoinsPurchase to delete.
     */
    where: CoinsPurchaseWhereUniqueInput
  }

  /**
   * CoinsPurchase deleteMany
   */
  export type CoinsPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinsPurchases to delete
     */
    where?: CoinsPurchaseWhereInput
    /**
     * Limit how many CoinsPurchases to delete.
     */
    limit?: number
  }

  /**
   * CoinsPurchase.coinsTransaction
   */
  export type CoinsPurchase$coinsTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsTransaction
     */
    select?: CoinsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsTransaction
     */
    omit?: CoinsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsTransactionInclude<ExtArgs> | null
    where?: CoinsTransactionWhereInput
  }

  /**
   * CoinsPurchase without action
   */
  export type CoinsPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model CoinsPackage
   */

  export type AggregateCoinsPackage = {
    _count: CoinsPackageCountAggregateOutputType | null
    _avg: CoinsPackageAvgAggregateOutputType | null
    _sum: CoinsPackageSumAggregateOutputType | null
    _min: CoinsPackageMinAggregateOutputType | null
    _max: CoinsPackageMaxAggregateOutputType | null
  }

  export type CoinsPackageAvgAggregateOutputType = {
    coins: number | null
    price: Decimal | null
    discount: Decimal | null
  }

  export type CoinsPackageSumAggregateOutputType = {
    coins: number | null
    price: Decimal | null
    discount: Decimal | null
  }

  export type CoinsPackageMinAggregateOutputType = {
    id: string | null
    name: string | null
    coins: number | null
    price: Decimal | null
    discount: Decimal | null
    description: string | null
    stripePriceId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoinsPackageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    coins: number | null
    price: Decimal | null
    discount: Decimal | null
    description: string | null
    stripePriceId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoinsPackageCountAggregateOutputType = {
    id: number
    name: number
    coins: number
    price: number
    discount: number
    description: number
    stripePriceId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoinsPackageAvgAggregateInputType = {
    coins?: true
    price?: true
    discount?: true
  }

  export type CoinsPackageSumAggregateInputType = {
    coins?: true
    price?: true
    discount?: true
  }

  export type CoinsPackageMinAggregateInputType = {
    id?: true
    name?: true
    coins?: true
    price?: true
    discount?: true
    description?: true
    stripePriceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoinsPackageMaxAggregateInputType = {
    id?: true
    name?: true
    coins?: true
    price?: true
    discount?: true
    description?: true
    stripePriceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoinsPackageCountAggregateInputType = {
    id?: true
    name?: true
    coins?: true
    price?: true
    discount?: true
    description?: true
    stripePriceId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoinsPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinsPackage to aggregate.
     */
    where?: CoinsPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsPackages to fetch.
     */
    orderBy?: CoinsPackageOrderByWithRelationInput | CoinsPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoinsPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoinsPackages
    **/
    _count?: true | CoinsPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoinsPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoinsPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoinsPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoinsPackageMaxAggregateInputType
  }

  export type GetCoinsPackageAggregateType<T extends CoinsPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateCoinsPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoinsPackage[P]>
      : GetScalarType<T[P], AggregateCoinsPackage[P]>
  }




  export type CoinsPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinsPackageWhereInput
    orderBy?: CoinsPackageOrderByWithAggregationInput | CoinsPackageOrderByWithAggregationInput[]
    by: CoinsPackageScalarFieldEnum[] | CoinsPackageScalarFieldEnum
    having?: CoinsPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoinsPackageCountAggregateInputType | true
    _avg?: CoinsPackageAvgAggregateInputType
    _sum?: CoinsPackageSumAggregateInputType
    _min?: CoinsPackageMinAggregateInputType
    _max?: CoinsPackageMaxAggregateInputType
  }

  export type CoinsPackageGroupByOutputType = {
    id: string
    name: string
    coins: number
    price: Decimal
    discount: Decimal | null
    description: string | null
    stripePriceId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CoinsPackageCountAggregateOutputType | null
    _avg: CoinsPackageAvgAggregateOutputType | null
    _sum: CoinsPackageSumAggregateOutputType | null
    _min: CoinsPackageMinAggregateOutputType | null
    _max: CoinsPackageMaxAggregateOutputType | null
  }

  type GetCoinsPackageGroupByPayload<T extends CoinsPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoinsPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoinsPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoinsPackageGroupByOutputType[P]>
            : GetScalarType<T[P], CoinsPackageGroupByOutputType[P]>
        }
      >
    >


  export type CoinsPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coins?: boolean
    price?: boolean
    discount?: boolean
    description?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coinsPurchases?: boolean | CoinsPackage$coinsPurchasesArgs<ExtArgs>
    _count?: boolean | CoinsPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coinsPackage"]>

  export type CoinsPackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coins?: boolean
    price?: boolean
    discount?: boolean
    description?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coinsPackage"]>

  export type CoinsPackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coins?: boolean
    price?: boolean
    discount?: boolean
    description?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coinsPackage"]>

  export type CoinsPackageSelectScalar = {
    id?: boolean
    name?: boolean
    coins?: boolean
    price?: boolean
    discount?: boolean
    description?: boolean
    stripePriceId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoinsPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "coins" | "price" | "discount" | "description" | "stripePriceId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["coinsPackage"]>
  export type CoinsPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coinsPurchases?: boolean | CoinsPackage$coinsPurchasesArgs<ExtArgs>
    _count?: boolean | CoinsPackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoinsPackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CoinsPackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoinsPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoinsPackage"
    objects: {
      coinsPurchases: Prisma.$CoinsPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      coins: number
      price: Prisma.Decimal
      discount: Prisma.Decimal | null
      description: string | null
      stripePriceId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coinsPackage"]>
    composites: {}
  }

  type CoinsPackageGetPayload<S extends boolean | null | undefined | CoinsPackageDefaultArgs> = $Result.GetResult<Prisma.$CoinsPackagePayload, S>

  type CoinsPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoinsPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoinsPackageCountAggregateInputType | true
    }

  export interface CoinsPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoinsPackage'], meta: { name: 'CoinsPackage' } }
    /**
     * Find zero or one CoinsPackage that matches the filter.
     * @param {CoinsPackageFindUniqueArgs} args - Arguments to find a CoinsPackage
     * @example
     * // Get one CoinsPackage
     * const coinsPackage = await prisma.coinsPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoinsPackageFindUniqueArgs>(args: SelectSubset<T, CoinsPackageFindUniqueArgs<ExtArgs>>): Prisma__CoinsPackageClient<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoinsPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoinsPackageFindUniqueOrThrowArgs} args - Arguments to find a CoinsPackage
     * @example
     * // Get one CoinsPackage
     * const coinsPackage = await prisma.coinsPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoinsPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, CoinsPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoinsPackageClient<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoinsPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPackageFindFirstArgs} args - Arguments to find a CoinsPackage
     * @example
     * // Get one CoinsPackage
     * const coinsPackage = await prisma.coinsPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoinsPackageFindFirstArgs>(args?: SelectSubset<T, CoinsPackageFindFirstArgs<ExtArgs>>): Prisma__CoinsPackageClient<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoinsPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPackageFindFirstOrThrowArgs} args - Arguments to find a CoinsPackage
     * @example
     * // Get one CoinsPackage
     * const coinsPackage = await prisma.coinsPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoinsPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, CoinsPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoinsPackageClient<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoinsPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoinsPackages
     * const coinsPackages = await prisma.coinsPackage.findMany()
     * 
     * // Get first 10 CoinsPackages
     * const coinsPackages = await prisma.coinsPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coinsPackageWithIdOnly = await prisma.coinsPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoinsPackageFindManyArgs>(args?: SelectSubset<T, CoinsPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoinsPackage.
     * @param {CoinsPackageCreateArgs} args - Arguments to create a CoinsPackage.
     * @example
     * // Create one CoinsPackage
     * const CoinsPackage = await prisma.coinsPackage.create({
     *   data: {
     *     // ... data to create a CoinsPackage
     *   }
     * })
     * 
     */
    create<T extends CoinsPackageCreateArgs>(args: SelectSubset<T, CoinsPackageCreateArgs<ExtArgs>>): Prisma__CoinsPackageClient<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoinsPackages.
     * @param {CoinsPackageCreateManyArgs} args - Arguments to create many CoinsPackages.
     * @example
     * // Create many CoinsPackages
     * const coinsPackage = await prisma.coinsPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoinsPackageCreateManyArgs>(args?: SelectSubset<T, CoinsPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoinsPackages and returns the data saved in the database.
     * @param {CoinsPackageCreateManyAndReturnArgs} args - Arguments to create many CoinsPackages.
     * @example
     * // Create many CoinsPackages
     * const coinsPackage = await prisma.coinsPackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoinsPackages and only return the `id`
     * const coinsPackageWithIdOnly = await prisma.coinsPackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoinsPackageCreateManyAndReturnArgs>(args?: SelectSubset<T, CoinsPackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoinsPackage.
     * @param {CoinsPackageDeleteArgs} args - Arguments to delete one CoinsPackage.
     * @example
     * // Delete one CoinsPackage
     * const CoinsPackage = await prisma.coinsPackage.delete({
     *   where: {
     *     // ... filter to delete one CoinsPackage
     *   }
     * })
     * 
     */
    delete<T extends CoinsPackageDeleteArgs>(args: SelectSubset<T, CoinsPackageDeleteArgs<ExtArgs>>): Prisma__CoinsPackageClient<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoinsPackage.
     * @param {CoinsPackageUpdateArgs} args - Arguments to update one CoinsPackage.
     * @example
     * // Update one CoinsPackage
     * const coinsPackage = await prisma.coinsPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoinsPackageUpdateArgs>(args: SelectSubset<T, CoinsPackageUpdateArgs<ExtArgs>>): Prisma__CoinsPackageClient<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoinsPackages.
     * @param {CoinsPackageDeleteManyArgs} args - Arguments to filter CoinsPackages to delete.
     * @example
     * // Delete a few CoinsPackages
     * const { count } = await prisma.coinsPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoinsPackageDeleteManyArgs>(args?: SelectSubset<T, CoinsPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinsPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoinsPackages
     * const coinsPackage = await prisma.coinsPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoinsPackageUpdateManyArgs>(args: SelectSubset<T, CoinsPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoinsPackages and returns the data updated in the database.
     * @param {CoinsPackageUpdateManyAndReturnArgs} args - Arguments to update many CoinsPackages.
     * @example
     * // Update many CoinsPackages
     * const coinsPackage = await prisma.coinsPackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoinsPackages and only return the `id`
     * const coinsPackageWithIdOnly = await prisma.coinsPackage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoinsPackageUpdateManyAndReturnArgs>(args: SelectSubset<T, CoinsPackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoinsPackage.
     * @param {CoinsPackageUpsertArgs} args - Arguments to update or create a CoinsPackage.
     * @example
     * // Update or create a CoinsPackage
     * const coinsPackage = await prisma.coinsPackage.upsert({
     *   create: {
     *     // ... data to create a CoinsPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoinsPackage we want to update
     *   }
     * })
     */
    upsert<T extends CoinsPackageUpsertArgs>(args: SelectSubset<T, CoinsPackageUpsertArgs<ExtArgs>>): Prisma__CoinsPackageClient<$Result.GetResult<Prisma.$CoinsPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoinsPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPackageCountArgs} args - Arguments to filter CoinsPackages to count.
     * @example
     * // Count the number of CoinsPackages
     * const count = await prisma.coinsPackage.count({
     *   where: {
     *     // ... the filter for the CoinsPackages we want to count
     *   }
     * })
    **/
    count<T extends CoinsPackageCountArgs>(
      args?: Subset<T, CoinsPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoinsPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoinsPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoinsPackageAggregateArgs>(args: Subset<T, CoinsPackageAggregateArgs>): Prisma.PrismaPromise<GetCoinsPackageAggregateType<T>>

    /**
     * Group by CoinsPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinsPackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoinsPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinsPackageGroupByArgs['orderBy'] }
        : { orderBy?: CoinsPackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoinsPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoinsPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoinsPackage model
   */
  readonly fields: CoinsPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoinsPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinsPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coinsPurchases<T extends CoinsPackage$coinsPurchasesArgs<ExtArgs> = {}>(args?: Subset<T, CoinsPackage$coinsPurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinsPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoinsPackage model
   */
  interface CoinsPackageFieldRefs {
    readonly id: FieldRef<"CoinsPackage", 'String'>
    readonly name: FieldRef<"CoinsPackage", 'String'>
    readonly coins: FieldRef<"CoinsPackage", 'Int'>
    readonly price: FieldRef<"CoinsPackage", 'Decimal'>
    readonly discount: FieldRef<"CoinsPackage", 'Decimal'>
    readonly description: FieldRef<"CoinsPackage", 'String'>
    readonly stripePriceId: FieldRef<"CoinsPackage", 'String'>
    readonly isActive: FieldRef<"CoinsPackage", 'Boolean'>
    readonly createdAt: FieldRef<"CoinsPackage", 'DateTime'>
    readonly updatedAt: FieldRef<"CoinsPackage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoinsPackage findUnique
   */
  export type CoinsPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPackageInclude<ExtArgs> | null
    /**
     * Filter, which CoinsPackage to fetch.
     */
    where: CoinsPackageWhereUniqueInput
  }

  /**
   * CoinsPackage findUniqueOrThrow
   */
  export type CoinsPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPackageInclude<ExtArgs> | null
    /**
     * Filter, which CoinsPackage to fetch.
     */
    where: CoinsPackageWhereUniqueInput
  }

  /**
   * CoinsPackage findFirst
   */
  export type CoinsPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPackageInclude<ExtArgs> | null
    /**
     * Filter, which CoinsPackage to fetch.
     */
    where?: CoinsPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsPackages to fetch.
     */
    orderBy?: CoinsPackageOrderByWithRelationInput | CoinsPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinsPackages.
     */
    cursor?: CoinsPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinsPackages.
     */
    distinct?: CoinsPackageScalarFieldEnum | CoinsPackageScalarFieldEnum[]
  }

  /**
   * CoinsPackage findFirstOrThrow
   */
  export type CoinsPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPackageInclude<ExtArgs> | null
    /**
     * Filter, which CoinsPackage to fetch.
     */
    where?: CoinsPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsPackages to fetch.
     */
    orderBy?: CoinsPackageOrderByWithRelationInput | CoinsPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoinsPackages.
     */
    cursor?: CoinsPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoinsPackages.
     */
    distinct?: CoinsPackageScalarFieldEnum | CoinsPackageScalarFieldEnum[]
  }

  /**
   * CoinsPackage findMany
   */
  export type CoinsPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPackageInclude<ExtArgs> | null
    /**
     * Filter, which CoinsPackages to fetch.
     */
    where?: CoinsPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoinsPackages to fetch.
     */
    orderBy?: CoinsPackageOrderByWithRelationInput | CoinsPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoinsPackages.
     */
    cursor?: CoinsPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoinsPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoinsPackages.
     */
    skip?: number
    distinct?: CoinsPackageScalarFieldEnum | CoinsPackageScalarFieldEnum[]
  }

  /**
   * CoinsPackage create
   */
  export type CoinsPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a CoinsPackage.
     */
    data: XOR<CoinsPackageCreateInput, CoinsPackageUncheckedCreateInput>
  }

  /**
   * CoinsPackage createMany
   */
  export type CoinsPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoinsPackages.
     */
    data: CoinsPackageCreateManyInput | CoinsPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoinsPackage createManyAndReturn
   */
  export type CoinsPackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * The data used to create many CoinsPackages.
     */
    data: CoinsPackageCreateManyInput | CoinsPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoinsPackage update
   */
  export type CoinsPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a CoinsPackage.
     */
    data: XOR<CoinsPackageUpdateInput, CoinsPackageUncheckedUpdateInput>
    /**
     * Choose, which CoinsPackage to update.
     */
    where: CoinsPackageWhereUniqueInput
  }

  /**
   * CoinsPackage updateMany
   */
  export type CoinsPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoinsPackages.
     */
    data: XOR<CoinsPackageUpdateManyMutationInput, CoinsPackageUncheckedUpdateManyInput>
    /**
     * Filter which CoinsPackages to update
     */
    where?: CoinsPackageWhereInput
    /**
     * Limit how many CoinsPackages to update.
     */
    limit?: number
  }

  /**
   * CoinsPackage updateManyAndReturn
   */
  export type CoinsPackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * The data used to update CoinsPackages.
     */
    data: XOR<CoinsPackageUpdateManyMutationInput, CoinsPackageUncheckedUpdateManyInput>
    /**
     * Filter which CoinsPackages to update
     */
    where?: CoinsPackageWhereInput
    /**
     * Limit how many CoinsPackages to update.
     */
    limit?: number
  }

  /**
   * CoinsPackage upsert
   */
  export type CoinsPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the CoinsPackage to update in case it exists.
     */
    where: CoinsPackageWhereUniqueInput
    /**
     * In case the CoinsPackage found by the `where` argument doesn't exist, create a new CoinsPackage with this data.
     */
    create: XOR<CoinsPackageCreateInput, CoinsPackageUncheckedCreateInput>
    /**
     * In case the CoinsPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoinsPackageUpdateInput, CoinsPackageUncheckedUpdateInput>
  }

  /**
   * CoinsPackage delete
   */
  export type CoinsPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPackageInclude<ExtArgs> | null
    /**
     * Filter which CoinsPackage to delete.
     */
    where: CoinsPackageWhereUniqueInput
  }

  /**
   * CoinsPackage deleteMany
   */
  export type CoinsPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoinsPackages to delete
     */
    where?: CoinsPackageWhereInput
    /**
     * Limit how many CoinsPackages to delete.
     */
    limit?: number
  }

  /**
   * CoinsPackage.coinsPurchases
   */
  export type CoinsPackage$coinsPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPurchase
     */
    select?: CoinsPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPurchase
     */
    omit?: CoinsPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPurchaseInclude<ExtArgs> | null
    where?: CoinsPurchaseWhereInput
    orderBy?: CoinsPurchaseOrderByWithRelationInput | CoinsPurchaseOrderByWithRelationInput[]
    cursor?: CoinsPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoinsPurchaseScalarFieldEnum | CoinsPurchaseScalarFieldEnum[]
  }

  /**
   * CoinsPackage without action
   */
  export type CoinsPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinsPackage
     */
    select?: CoinsPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoinsPackage
     */
    omit?: CoinsPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinsPackageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BaseUserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    birthDate: 'birthDate',
    phone: 'phone',
    address: 'address',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin',
    passwordLastChanged: 'passwordLastChanged',
    passwordResetToken: 'passwordResetToken',
    passwordResetExpiry: 'passwordResetExpiry'
  };

  export type BaseUserScalarFieldEnum = (typeof BaseUserScalarFieldEnum)[keyof typeof BaseUserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    coins: 'coins',
    preferredTrainingTypes: 'preferredTrainingTypes',
    emergencyContact: 'emergencyContact'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const UserConsentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    consentType: 'consentType',
    granted: 'granted',
    grantedAt: 'grantedAt',
    revokedAt: 'revokedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type UserConsentScalarFieldEnum = (typeof UserConsentScalarFieldEnum)[keyof typeof UserConsentScalarFieldEnum]


  export const TrainerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    certification: 'certification',
    specialization: 'specialization'
  };

  export type TrainerScalarFieldEnum = (typeof TrainerScalarFieldEnum)[keyof typeof TrainerScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const TrainingSessionScalarFieldEnum: {
    id: 'id',
    trainerId: 'trainerId',
    trainingType: 'trainingType',
    date: 'date',
    startTime: 'startTime',
    durationMinutes: 'durationMinutes',
    maxParticipants: 'maxParticipants',
    coinsRequired: 'coinsRequired',
    status: 'status',
    qrCode: 'qrCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrainingSessionScalarFieldEnum = (typeof TrainingSessionScalarFieldEnum)[keyof typeof TrainingSessionScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trainingSessionId: 'trainingSessionId',
    status: 'status',
    coinsUsed: 'coinsUsed',
    bookedAt: 'bookedAt',
    cancelledAt: 'cancelledAt',
    attendedAt: 'attendedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const CoinsTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    type: 'type',
    description: 'description',
    balanceAfter: 'balanceAfter',
    relatedBookingId: 'relatedBookingId',
    orderId: 'orderId',
    createdAt: 'createdAt'
  };

  export type CoinsTransactionScalarFieldEnum = (typeof CoinsTransactionScalarFieldEnum)[keyof typeof CoinsTransactionScalarFieldEnum]


  export const CoinsPurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    coinsPackageId: 'coinsPackageId',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    paymentIntentId: 'paymentIntentId',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type CoinsPurchaseScalarFieldEnum = (typeof CoinsPurchaseScalarFieldEnum)[keyof typeof CoinsPurchaseScalarFieldEnum]


  export const CoinsPackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coins: 'coins',
    price: 'price',
    discount: 'discount',
    description: 'description',
    stripePriceId: 'stripePriceId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoinsPackageScalarFieldEnum = (typeof CoinsPackageScalarFieldEnum)[keyof typeof CoinsPackageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TrainingType[]'
   */
  export type ListEnumTrainingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingType[]'>
    


  /**
   * Reference to a field of type 'TrainingType'
   */
  export type EnumTrainingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingType'>
    


  /**
   * Reference to a field of type 'ConsentType'
   */
  export type EnumConsentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsentType'>
    


  /**
   * Reference to a field of type 'ConsentType[]'
   */
  export type ListEnumConsentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsentType[]'>
    


  /**
   * Reference to a field of type 'TrainingTimeSlot'
   */
  export type EnumTrainingTimeSlotFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingTimeSlot'>
    


  /**
   * Reference to a field of type 'TrainingTimeSlot[]'
   */
  export type ListEnumTrainingTimeSlotFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingTimeSlot[]'>
    


  /**
   * Reference to a field of type 'TrainingStatus'
   */
  export type EnumTrainingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingStatus'>
    


  /**
   * Reference to a field of type 'TrainingStatus[]'
   */
  export type ListEnumTrainingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrainingStatus[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'CoinsTransactionType'
   */
  export type EnumCoinsTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoinsTransactionType'>
    


  /**
   * Reference to a field of type 'CoinsTransactionType[]'
   */
  export type ListEnumCoinsTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoinsTransactionType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BaseUserWhereInput = {
    AND?: BaseUserWhereInput | BaseUserWhereInput[]
    OR?: BaseUserWhereInput[]
    NOT?: BaseUserWhereInput | BaseUserWhereInput[]
    id?: StringFilter<"BaseUser"> | string
    firstName?: StringFilter<"BaseUser"> | string
    lastName?: StringFilter<"BaseUser"> | string
    email?: StringFilter<"BaseUser"> | string
    password?: StringFilter<"BaseUser"> | string
    birthDate?: DateTimeFilter<"BaseUser"> | Date | string
    phone?: StringNullableFilter<"BaseUser"> | string | null
    address?: StringNullableFilter<"BaseUser"> | string | null
    role?: EnumUserRoleFilter<"BaseUser"> | $Enums.UserRole
    isActive?: BoolFilter<"BaseUser"> | boolean
    createdAt?: DateTimeFilter<"BaseUser"> | Date | string
    updatedAt?: DateTimeFilter<"BaseUser"> | Date | string
    lastLogin?: DateTimeFilter<"BaseUser"> | Date | string
    passwordLastChanged?: DateTimeFilter<"BaseUser"> | Date | string
    passwordResetToken?: StringNullableFilter<"BaseUser"> | string | null
    passwordResetExpiry?: DateTimeNullableFilter<"BaseUser"> | Date | string | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    trainer?: XOR<TrainerNullableScalarRelationFilter, TrainerWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    UserConsent?: UserConsentListRelationFilter
  }

  export type BaseUserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    passwordLastChanged?: SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpiry?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
    trainer?: TrainerOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    UserConsent?: UserConsentOrderByRelationAggregateInput
  }

  export type BaseUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: BaseUserWhereInput | BaseUserWhereInput[]
    OR?: BaseUserWhereInput[]
    NOT?: BaseUserWhereInput | BaseUserWhereInput[]
    firstName?: StringFilter<"BaseUser"> | string
    lastName?: StringFilter<"BaseUser"> | string
    password?: StringFilter<"BaseUser"> | string
    birthDate?: DateTimeFilter<"BaseUser"> | Date | string
    phone?: StringNullableFilter<"BaseUser"> | string | null
    address?: StringNullableFilter<"BaseUser"> | string | null
    role?: EnumUserRoleFilter<"BaseUser"> | $Enums.UserRole
    isActive?: BoolFilter<"BaseUser"> | boolean
    createdAt?: DateTimeFilter<"BaseUser"> | Date | string
    updatedAt?: DateTimeFilter<"BaseUser"> | Date | string
    lastLogin?: DateTimeFilter<"BaseUser"> | Date | string
    passwordLastChanged?: DateTimeFilter<"BaseUser"> | Date | string
    passwordResetToken?: StringNullableFilter<"BaseUser"> | string | null
    passwordResetExpiry?: DateTimeNullableFilter<"BaseUser"> | Date | string | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    trainer?: XOR<TrainerNullableScalarRelationFilter, TrainerWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    UserConsent?: UserConsentListRelationFilter
  }, "id" | "email">

  export type BaseUserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    passwordLastChanged?: SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpiry?: SortOrderInput | SortOrder
    _count?: BaseUserCountOrderByAggregateInput
    _max?: BaseUserMaxOrderByAggregateInput
    _min?: BaseUserMinOrderByAggregateInput
  }

  export type BaseUserScalarWhereWithAggregatesInput = {
    AND?: BaseUserScalarWhereWithAggregatesInput | BaseUserScalarWhereWithAggregatesInput[]
    OR?: BaseUserScalarWhereWithAggregatesInput[]
    NOT?: BaseUserScalarWhereWithAggregatesInput | BaseUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BaseUser"> | string
    firstName?: StringWithAggregatesFilter<"BaseUser"> | string
    lastName?: StringWithAggregatesFilter<"BaseUser"> | string
    email?: StringWithAggregatesFilter<"BaseUser"> | string
    password?: StringWithAggregatesFilter<"BaseUser"> | string
    birthDate?: DateTimeWithAggregatesFilter<"BaseUser"> | Date | string
    phone?: StringNullableWithAggregatesFilter<"BaseUser"> | string | null
    address?: StringNullableWithAggregatesFilter<"BaseUser"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"BaseUser"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"BaseUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BaseUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BaseUser"> | Date | string
    lastLogin?: DateTimeWithAggregatesFilter<"BaseUser"> | Date | string
    passwordLastChanged?: DateTimeWithAggregatesFilter<"BaseUser"> | Date | string
    passwordResetToken?: StringNullableWithAggregatesFilter<"BaseUser"> | string | null
    passwordResetExpiry?: DateTimeNullableWithAggregatesFilter<"BaseUser"> | Date | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    userId?: StringFilter<"Customer"> | string
    coins?: IntFilter<"Customer"> | number
    preferredTrainingTypes?: EnumTrainingTypeNullableListFilter<"Customer">
    emergencyContact?: StringNullableFilter<"Customer"> | string | null
    user?: XOR<BaseUserScalarRelationFilter, BaseUserWhereInput>
    coinsTransactions?: CoinsTransactionListRelationFilter
    bookings?: BookingListRelationFilter
    coinsPurchases?: CoinsPurchaseListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    coins?: SortOrder
    preferredTrainingTypes?: SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    user?: BaseUserOrderByWithRelationInput
    coinsTransactions?: CoinsTransactionOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    coinsPurchases?: CoinsPurchaseOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    coins?: IntFilter<"Customer"> | number
    preferredTrainingTypes?: EnumTrainingTypeNullableListFilter<"Customer">
    emergencyContact?: StringNullableFilter<"Customer"> | string | null
    user?: XOR<BaseUserScalarRelationFilter, BaseUserWhereInput>
    coinsTransactions?: CoinsTransactionListRelationFilter
    bookings?: BookingListRelationFilter
    coinsPurchases?: CoinsPurchaseListRelationFilter
  }, "id" | "userId">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    coins?: SortOrder
    preferredTrainingTypes?: SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    userId?: StringWithAggregatesFilter<"Customer"> | string
    coins?: IntWithAggregatesFilter<"Customer"> | number
    preferredTrainingTypes?: EnumTrainingTypeNullableListFilter<"Customer">
    emergencyContact?: StringNullableWithAggregatesFilter<"Customer"> | string | null
  }

  export type UserConsentWhereInput = {
    AND?: UserConsentWhereInput | UserConsentWhereInput[]
    OR?: UserConsentWhereInput[]
    NOT?: UserConsentWhereInput | UserConsentWhereInput[]
    id?: StringFilter<"UserConsent"> | string
    userId?: StringFilter<"UserConsent"> | string
    consentType?: EnumConsentTypeFilter<"UserConsent"> | $Enums.ConsentType
    granted?: BoolFilter<"UserConsent"> | boolean
    grantedAt?: DateTimeFilter<"UserConsent"> | Date | string
    revokedAt?: DateTimeNullableFilter<"UserConsent"> | Date | string | null
    ipAddress?: StringNullableFilter<"UserConsent"> | string | null
    userAgent?: StringNullableFilter<"UserConsent"> | string | null
    user?: XOR<BaseUserScalarRelationFilter, BaseUserWhereInput>
  }

  export type UserConsentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    consentType?: SortOrder
    granted?: SortOrder
    grantedAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    user?: BaseUserOrderByWithRelationInput
  }

  export type UserConsentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_consentType?: UserConsentUserIdConsentTypeCompoundUniqueInput
    AND?: UserConsentWhereInput | UserConsentWhereInput[]
    OR?: UserConsentWhereInput[]
    NOT?: UserConsentWhereInput | UserConsentWhereInput[]
    userId?: StringFilter<"UserConsent"> | string
    consentType?: EnumConsentTypeFilter<"UserConsent"> | $Enums.ConsentType
    granted?: BoolFilter<"UserConsent"> | boolean
    grantedAt?: DateTimeFilter<"UserConsent"> | Date | string
    revokedAt?: DateTimeNullableFilter<"UserConsent"> | Date | string | null
    ipAddress?: StringNullableFilter<"UserConsent"> | string | null
    userAgent?: StringNullableFilter<"UserConsent"> | string | null
    user?: XOR<BaseUserScalarRelationFilter, BaseUserWhereInput>
  }, "id" | "userId_consentType">

  export type UserConsentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    consentType?: SortOrder
    granted?: SortOrder
    grantedAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: UserConsentCountOrderByAggregateInput
    _max?: UserConsentMaxOrderByAggregateInput
    _min?: UserConsentMinOrderByAggregateInput
  }

  export type UserConsentScalarWhereWithAggregatesInput = {
    AND?: UserConsentScalarWhereWithAggregatesInput | UserConsentScalarWhereWithAggregatesInput[]
    OR?: UserConsentScalarWhereWithAggregatesInput[]
    NOT?: UserConsentScalarWhereWithAggregatesInput | UserConsentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserConsent"> | string
    userId?: StringWithAggregatesFilter<"UserConsent"> | string
    consentType?: EnumConsentTypeWithAggregatesFilter<"UserConsent"> | $Enums.ConsentType
    granted?: BoolWithAggregatesFilter<"UserConsent"> | boolean
    grantedAt?: DateTimeWithAggregatesFilter<"UserConsent"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"UserConsent"> | Date | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"UserConsent"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"UserConsent"> | string | null
  }

  export type TrainerWhereInput = {
    AND?: TrainerWhereInput | TrainerWhereInput[]
    OR?: TrainerWhereInput[]
    NOT?: TrainerWhereInput | TrainerWhereInput[]
    id?: StringFilter<"Trainer"> | string
    userId?: StringFilter<"Trainer"> | string
    certification?: StringFilter<"Trainer"> | string
    specialization?: EnumTrainingTypeNullableListFilter<"Trainer">
    user?: XOR<BaseUserScalarRelationFilter, BaseUserWhereInput>
    trainingSessions?: TrainingSessionListRelationFilter
  }

  export type TrainerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    certification?: SortOrder
    specialization?: SortOrder
    user?: BaseUserOrderByWithRelationInput
    trainingSessions?: TrainingSessionOrderByRelationAggregateInput
  }

  export type TrainerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TrainerWhereInput | TrainerWhereInput[]
    OR?: TrainerWhereInput[]
    NOT?: TrainerWhereInput | TrainerWhereInput[]
    certification?: StringFilter<"Trainer"> | string
    specialization?: EnumTrainingTypeNullableListFilter<"Trainer">
    user?: XOR<BaseUserScalarRelationFilter, BaseUserWhereInput>
    trainingSessions?: TrainingSessionListRelationFilter
  }, "id" | "userId">

  export type TrainerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    certification?: SortOrder
    specialization?: SortOrder
    _count?: TrainerCountOrderByAggregateInput
    _max?: TrainerMaxOrderByAggregateInput
    _min?: TrainerMinOrderByAggregateInput
  }

  export type TrainerScalarWhereWithAggregatesInput = {
    AND?: TrainerScalarWhereWithAggregatesInput | TrainerScalarWhereWithAggregatesInput[]
    OR?: TrainerScalarWhereWithAggregatesInput[]
    NOT?: TrainerScalarWhereWithAggregatesInput | TrainerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trainer"> | string
    userId?: StringWithAggregatesFilter<"Trainer"> | string
    certification?: StringWithAggregatesFilter<"Trainer"> | string
    specialization?: EnumTrainingTypeNullableListFilter<"Trainer">
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    user?: XOR<BaseUserScalarRelationFilter, BaseUserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: BaseUserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    user?: XOR<BaseUserScalarRelationFilter, BaseUserWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    userId?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type TrainingSessionWhereInput = {
    AND?: TrainingSessionWhereInput | TrainingSessionWhereInput[]
    OR?: TrainingSessionWhereInput[]
    NOT?: TrainingSessionWhereInput | TrainingSessionWhereInput[]
    id?: StringFilter<"TrainingSession"> | string
    trainerId?: StringFilter<"TrainingSession"> | string
    trainingType?: EnumTrainingTypeFilter<"TrainingSession"> | $Enums.TrainingType
    date?: DateTimeFilter<"TrainingSession"> | Date | string
    startTime?: EnumTrainingTimeSlotFilter<"TrainingSession"> | $Enums.TrainingTimeSlot
    durationMinutes?: IntFilter<"TrainingSession"> | number
    maxParticipants?: IntFilter<"TrainingSession"> | number
    coinsRequired?: IntFilter<"TrainingSession"> | number
    status?: EnumTrainingStatusFilter<"TrainingSession"> | $Enums.TrainingStatus
    qrCode?: StringFilter<"TrainingSession"> | string
    createdAt?: DateTimeFilter<"TrainingSession"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingSession"> | Date | string
    trainer?: XOR<TrainerScalarRelationFilter, TrainerWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type TrainingSessionOrderByWithRelationInput = {
    id?: SortOrder
    trainerId?: SortOrder
    trainingType?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    durationMinutes?: SortOrder
    maxParticipants?: SortOrder
    coinsRequired?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trainer?: TrainerOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type TrainingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qrCode?: string
    date_startTime?: TrainingSessionDateStartTimeCompoundUniqueInput
    AND?: TrainingSessionWhereInput | TrainingSessionWhereInput[]
    OR?: TrainingSessionWhereInput[]
    NOT?: TrainingSessionWhereInput | TrainingSessionWhereInput[]
    trainerId?: StringFilter<"TrainingSession"> | string
    trainingType?: EnumTrainingTypeFilter<"TrainingSession"> | $Enums.TrainingType
    date?: DateTimeFilter<"TrainingSession"> | Date | string
    startTime?: EnumTrainingTimeSlotFilter<"TrainingSession"> | $Enums.TrainingTimeSlot
    durationMinutes?: IntFilter<"TrainingSession"> | number
    maxParticipants?: IntFilter<"TrainingSession"> | number
    coinsRequired?: IntFilter<"TrainingSession"> | number
    status?: EnumTrainingStatusFilter<"TrainingSession"> | $Enums.TrainingStatus
    createdAt?: DateTimeFilter<"TrainingSession"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingSession"> | Date | string
    trainer?: XOR<TrainerScalarRelationFilter, TrainerWhereInput>
    bookings?: BookingListRelationFilter
  }, "id" | "qrCode" | "date_startTime">

  export type TrainingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    trainerId?: SortOrder
    trainingType?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    durationMinutes?: SortOrder
    maxParticipants?: SortOrder
    coinsRequired?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrainingSessionCountOrderByAggregateInput
    _avg?: TrainingSessionAvgOrderByAggregateInput
    _max?: TrainingSessionMaxOrderByAggregateInput
    _min?: TrainingSessionMinOrderByAggregateInput
    _sum?: TrainingSessionSumOrderByAggregateInput
  }

  export type TrainingSessionScalarWhereWithAggregatesInput = {
    AND?: TrainingSessionScalarWhereWithAggregatesInput | TrainingSessionScalarWhereWithAggregatesInput[]
    OR?: TrainingSessionScalarWhereWithAggregatesInput[]
    NOT?: TrainingSessionScalarWhereWithAggregatesInput | TrainingSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrainingSession"> | string
    trainerId?: StringWithAggregatesFilter<"TrainingSession"> | string
    trainingType?: EnumTrainingTypeWithAggregatesFilter<"TrainingSession"> | $Enums.TrainingType
    date?: DateTimeWithAggregatesFilter<"TrainingSession"> | Date | string
    startTime?: EnumTrainingTimeSlotWithAggregatesFilter<"TrainingSession"> | $Enums.TrainingTimeSlot
    durationMinutes?: IntWithAggregatesFilter<"TrainingSession"> | number
    maxParticipants?: IntWithAggregatesFilter<"TrainingSession"> | number
    coinsRequired?: IntWithAggregatesFilter<"TrainingSession"> | number
    status?: EnumTrainingStatusWithAggregatesFilter<"TrainingSession"> | $Enums.TrainingStatus
    qrCode?: StringWithAggregatesFilter<"TrainingSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TrainingSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrainingSession"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    trainingSessionId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    coinsUsed?: IntFilter<"Booking"> | number
    bookedAt?: DateTimeFilter<"Booking"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    attendedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    trainingSession?: XOR<TrainingSessionScalarRelationFilter, TrainingSessionWhereInput>
    coinsTransactions?: CoinsTransactionListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trainingSessionId?: SortOrder
    status?: SortOrder
    coinsUsed?: SortOrder
    bookedAt?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    attendedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    trainingSession?: TrainingSessionOrderByWithRelationInput
    coinsTransactions?: CoinsTransactionOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_trainingSessionId?: BookingUserIdTrainingSessionIdCompoundUniqueInput
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    trainingSessionId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    coinsUsed?: IntFilter<"Booking"> | number
    bookedAt?: DateTimeFilter<"Booking"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    attendedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    trainingSession?: XOR<TrainingSessionScalarRelationFilter, TrainingSessionWhereInput>
    coinsTransactions?: CoinsTransactionListRelationFilter
  }, "id" | "userId_trainingSessionId">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trainingSessionId?: SortOrder
    status?: SortOrder
    coinsUsed?: SortOrder
    bookedAt?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    attendedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    trainingSessionId?: StringWithAggregatesFilter<"Booking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    coinsUsed?: IntWithAggregatesFilter<"Booking"> | number
    bookedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    attendedAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type CoinsTransactionWhereInput = {
    AND?: CoinsTransactionWhereInput | CoinsTransactionWhereInput[]
    OR?: CoinsTransactionWhereInput[]
    NOT?: CoinsTransactionWhereInput | CoinsTransactionWhereInput[]
    id?: StringFilter<"CoinsTransaction"> | string
    userId?: StringFilter<"CoinsTransaction"> | string
    amount?: IntFilter<"CoinsTransaction"> | number
    type?: EnumCoinsTransactionTypeFilter<"CoinsTransaction"> | $Enums.CoinsTransactionType
    description?: StringFilter<"CoinsTransaction"> | string
    balanceAfter?: IntFilter<"CoinsTransaction"> | number
    relatedBookingId?: StringNullableFilter<"CoinsTransaction"> | string | null
    orderId?: StringNullableFilter<"CoinsTransaction"> | string | null
    createdAt?: DateTimeFilter<"CoinsTransaction"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    relatedBooking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    coinsPurchase?: XOR<CoinsPurchaseNullableScalarRelationFilter, CoinsPurchaseWhereInput> | null
  }

  export type CoinsTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    balanceAfter?: SortOrder
    relatedBookingId?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    relatedBooking?: BookingOrderByWithRelationInput
    coinsPurchase?: CoinsPurchaseOrderByWithRelationInput
  }

  export type CoinsTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: CoinsTransactionWhereInput | CoinsTransactionWhereInput[]
    OR?: CoinsTransactionWhereInput[]
    NOT?: CoinsTransactionWhereInput | CoinsTransactionWhereInput[]
    userId?: StringFilter<"CoinsTransaction"> | string
    amount?: IntFilter<"CoinsTransaction"> | number
    type?: EnumCoinsTransactionTypeFilter<"CoinsTransaction"> | $Enums.CoinsTransactionType
    description?: StringFilter<"CoinsTransaction"> | string
    balanceAfter?: IntFilter<"CoinsTransaction"> | number
    relatedBookingId?: StringNullableFilter<"CoinsTransaction"> | string | null
    createdAt?: DateTimeFilter<"CoinsTransaction"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    relatedBooking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    coinsPurchase?: XOR<CoinsPurchaseNullableScalarRelationFilter, CoinsPurchaseWhereInput> | null
  }, "id" | "orderId">

  export type CoinsTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    balanceAfter?: SortOrder
    relatedBookingId?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CoinsTransactionCountOrderByAggregateInput
    _avg?: CoinsTransactionAvgOrderByAggregateInput
    _max?: CoinsTransactionMaxOrderByAggregateInput
    _min?: CoinsTransactionMinOrderByAggregateInput
    _sum?: CoinsTransactionSumOrderByAggregateInput
  }

  export type CoinsTransactionScalarWhereWithAggregatesInput = {
    AND?: CoinsTransactionScalarWhereWithAggregatesInput | CoinsTransactionScalarWhereWithAggregatesInput[]
    OR?: CoinsTransactionScalarWhereWithAggregatesInput[]
    NOT?: CoinsTransactionScalarWhereWithAggregatesInput | CoinsTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoinsTransaction"> | string
    userId?: StringWithAggregatesFilter<"CoinsTransaction"> | string
    amount?: IntWithAggregatesFilter<"CoinsTransaction"> | number
    type?: EnumCoinsTransactionTypeWithAggregatesFilter<"CoinsTransaction"> | $Enums.CoinsTransactionType
    description?: StringWithAggregatesFilter<"CoinsTransaction"> | string
    balanceAfter?: IntWithAggregatesFilter<"CoinsTransaction"> | number
    relatedBookingId?: StringNullableWithAggregatesFilter<"CoinsTransaction"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"CoinsTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CoinsTransaction"> | Date | string
  }

  export type CoinsPurchaseWhereInput = {
    AND?: CoinsPurchaseWhereInput | CoinsPurchaseWhereInput[]
    OR?: CoinsPurchaseWhereInput[]
    NOT?: CoinsPurchaseWhereInput | CoinsPurchaseWhereInput[]
    id?: StringFilter<"CoinsPurchase"> | string
    userId?: StringFilter<"CoinsPurchase"> | string
    coinsPackageId?: StringFilter<"CoinsPurchase"> | string
    quantity?: IntFilter<"CoinsPurchase"> | number
    totalPrice?: DecimalFilter<"CoinsPurchase"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFilter<"CoinsPurchase"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"CoinsPurchase"> | string | null
    paymentIntentId?: StringNullableFilter<"CoinsPurchase"> | string | null
    createdAt?: DateTimeFilter<"CoinsPurchase"> | Date | string
    completedAt?: DateTimeNullableFilter<"CoinsPurchase"> | Date | string | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    coinsPackage?: XOR<CoinsPackageScalarRelationFilter, CoinsPackageWhereInput>
    coinsTransaction?: XOR<CoinsTransactionNullableScalarRelationFilter, CoinsTransactionWhereInput> | null
  }

  export type CoinsPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    coinsPackageId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentIntentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
    coinsPackage?: CoinsPackageOrderByWithRelationInput
    coinsTransaction?: CoinsTransactionOrderByWithRelationInput
  }

  export type CoinsPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoinsPurchaseWhereInput | CoinsPurchaseWhereInput[]
    OR?: CoinsPurchaseWhereInput[]
    NOT?: CoinsPurchaseWhereInput | CoinsPurchaseWhereInput[]
    userId?: StringFilter<"CoinsPurchase"> | string
    coinsPackageId?: StringFilter<"CoinsPurchase"> | string
    quantity?: IntFilter<"CoinsPurchase"> | number
    totalPrice?: DecimalFilter<"CoinsPurchase"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFilter<"CoinsPurchase"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"CoinsPurchase"> | string | null
    paymentIntentId?: StringNullableFilter<"CoinsPurchase"> | string | null
    createdAt?: DateTimeFilter<"CoinsPurchase"> | Date | string
    completedAt?: DateTimeNullableFilter<"CoinsPurchase"> | Date | string | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    coinsPackage?: XOR<CoinsPackageScalarRelationFilter, CoinsPackageWhereInput>
    coinsTransaction?: XOR<CoinsTransactionNullableScalarRelationFilter, CoinsTransactionWhereInput> | null
  }, "id">

  export type CoinsPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    coinsPackageId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentIntentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: CoinsPurchaseCountOrderByAggregateInput
    _avg?: CoinsPurchaseAvgOrderByAggregateInput
    _max?: CoinsPurchaseMaxOrderByAggregateInput
    _min?: CoinsPurchaseMinOrderByAggregateInput
    _sum?: CoinsPurchaseSumOrderByAggregateInput
  }

  export type CoinsPurchaseScalarWhereWithAggregatesInput = {
    AND?: CoinsPurchaseScalarWhereWithAggregatesInput | CoinsPurchaseScalarWhereWithAggregatesInput[]
    OR?: CoinsPurchaseScalarWhereWithAggregatesInput[]
    NOT?: CoinsPurchaseScalarWhereWithAggregatesInput | CoinsPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoinsPurchase"> | string
    userId?: StringWithAggregatesFilter<"CoinsPurchase"> | string
    coinsPackageId?: StringWithAggregatesFilter<"CoinsPurchase"> | string
    quantity?: IntWithAggregatesFilter<"CoinsPurchase"> | number
    totalPrice?: DecimalWithAggregatesFilter<"CoinsPurchase"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"CoinsPurchase"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableWithAggregatesFilter<"CoinsPurchase"> | string | null
    paymentIntentId?: StringNullableWithAggregatesFilter<"CoinsPurchase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CoinsPurchase"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"CoinsPurchase"> | Date | string | null
  }

  export type CoinsPackageWhereInput = {
    AND?: CoinsPackageWhereInput | CoinsPackageWhereInput[]
    OR?: CoinsPackageWhereInput[]
    NOT?: CoinsPackageWhereInput | CoinsPackageWhereInput[]
    id?: StringFilter<"CoinsPackage"> | string
    name?: StringFilter<"CoinsPackage"> | string
    coins?: IntFilter<"CoinsPackage"> | number
    price?: DecimalFilter<"CoinsPackage"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalNullableFilter<"CoinsPackage"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"CoinsPackage"> | string | null
    stripePriceId?: StringNullableFilter<"CoinsPackage"> | string | null
    isActive?: BoolFilter<"CoinsPackage"> | boolean
    createdAt?: DateTimeFilter<"CoinsPackage"> | Date | string
    updatedAt?: DateTimeFilter<"CoinsPackage"> | Date | string
    coinsPurchases?: CoinsPurchaseListRelationFilter
  }

  export type CoinsPackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coins?: SortOrder
    price?: SortOrder
    discount?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coinsPurchases?: CoinsPurchaseOrderByRelationAggregateInput
  }

  export type CoinsPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoinsPackageWhereInput | CoinsPackageWhereInput[]
    OR?: CoinsPackageWhereInput[]
    NOT?: CoinsPackageWhereInput | CoinsPackageWhereInput[]
    name?: StringFilter<"CoinsPackage"> | string
    coins?: IntFilter<"CoinsPackage"> | number
    price?: DecimalFilter<"CoinsPackage"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalNullableFilter<"CoinsPackage"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"CoinsPackage"> | string | null
    stripePriceId?: StringNullableFilter<"CoinsPackage"> | string | null
    isActive?: BoolFilter<"CoinsPackage"> | boolean
    createdAt?: DateTimeFilter<"CoinsPackage"> | Date | string
    updatedAt?: DateTimeFilter<"CoinsPackage"> | Date | string
    coinsPurchases?: CoinsPurchaseListRelationFilter
  }, "id">

  export type CoinsPackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coins?: SortOrder
    price?: SortOrder
    discount?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoinsPackageCountOrderByAggregateInput
    _avg?: CoinsPackageAvgOrderByAggregateInput
    _max?: CoinsPackageMaxOrderByAggregateInput
    _min?: CoinsPackageMinOrderByAggregateInput
    _sum?: CoinsPackageSumOrderByAggregateInput
  }

  export type CoinsPackageScalarWhereWithAggregatesInput = {
    AND?: CoinsPackageScalarWhereWithAggregatesInput | CoinsPackageScalarWhereWithAggregatesInput[]
    OR?: CoinsPackageScalarWhereWithAggregatesInput[]
    NOT?: CoinsPackageScalarWhereWithAggregatesInput | CoinsPackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoinsPackage"> | string
    name?: StringWithAggregatesFilter<"CoinsPackage"> | string
    coins?: IntWithAggregatesFilter<"CoinsPackage"> | number
    price?: DecimalWithAggregatesFilter<"CoinsPackage"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalNullableWithAggregatesFilter<"CoinsPackage"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"CoinsPackage"> | string | null
    stripePriceId?: StringNullableWithAggregatesFilter<"CoinsPackage"> | string | null
    isActive?: BoolWithAggregatesFilter<"CoinsPackage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CoinsPackage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoinsPackage"> | Date | string
  }

  export type BaseUserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutUserInput
    trainer?: TrainerCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
    UserConsent?: UserConsentCreateNestedManyWithoutUserInput
  }

  export type BaseUserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    trainer?: TrainerUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    UserConsent?: UserConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type BaseUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutUserNestedInput
    trainer?: TrainerUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
    UserConsent?: UserConsentUpdateManyWithoutUserNestedInput
  }

  export type BaseUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    trainer?: TrainerUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    UserConsent?: UserConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BaseUserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
  }

  export type BaseUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BaseUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerCreateInput = {
    id?: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
    user: BaseUserCreateNestedOneWithoutCustomerInput
    coinsTransactions?: CoinsTransactionCreateNestedManyWithoutCustomerInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
    coinsPurchases?: CoinsPurchaseCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    userId: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
    coinsTransactions?: CoinsTransactionUncheckedCreateNestedManyWithoutCustomerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
    coinsPurchases?: CoinsPurchaseUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    user?: BaseUserUpdateOneRequiredWithoutCustomerNestedInput
    coinsTransactions?: CoinsTransactionUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
    coinsPurchases?: CoinsPurchaseUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    coinsTransactions?: CoinsTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
    coinsPurchases?: CoinsPurchaseUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    userId: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserConsentCreateInput = {
    id?: string
    consentType: $Enums.ConsentType
    granted: boolean
    grantedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    user: BaseUserCreateNestedOneWithoutUserConsentInput
  }

  export type UserConsentUncheckedCreateInput = {
    id?: string
    userId: string
    consentType: $Enums.ConsentType
    granted: boolean
    grantedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type UserConsentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    granted?: BoolFieldUpdateOperationsInput | boolean
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: BaseUserUpdateOneRequiredWithoutUserConsentNestedInput
  }

  export type UserConsentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    granted?: BoolFieldUpdateOperationsInput | boolean
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserConsentCreateManyInput = {
    id?: string
    userId: string
    consentType: $Enums.ConsentType
    granted: boolean
    grantedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type UserConsentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    granted?: BoolFieldUpdateOperationsInput | boolean
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserConsentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    granted?: BoolFieldUpdateOperationsInput | boolean
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrainerCreateInput = {
    id?: string
    certification: string
    specialization?: TrainerCreatespecializationInput | $Enums.TrainingType[]
    user: BaseUserCreateNestedOneWithoutTrainerInput
    trainingSessions?: TrainingSessionCreateNestedManyWithoutTrainerInput
  }

  export type TrainerUncheckedCreateInput = {
    id?: string
    userId: string
    certification: string
    specialization?: TrainerCreatespecializationInput | $Enums.TrainingType[]
    trainingSessions?: TrainingSessionUncheckedCreateNestedManyWithoutTrainerInput
  }

  export type TrainerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    specialization?: TrainerUpdatespecializationInput | $Enums.TrainingType[]
    user?: BaseUserUpdateOneRequiredWithoutTrainerNestedInput
    trainingSessions?: TrainingSessionUpdateManyWithoutTrainerNestedInput
  }

  export type TrainerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    specialization?: TrainerUpdatespecializationInput | $Enums.TrainingType[]
    trainingSessions?: TrainingSessionUncheckedUpdateManyWithoutTrainerNestedInput
  }

  export type TrainerCreateManyInput = {
    id?: string
    userId: string
    certification: string
    specialization?: TrainerCreatespecializationInput | $Enums.TrainingType[]
  }

  export type TrainerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    specialization?: TrainerUpdatespecializationInput | $Enums.TrainingType[]
  }

  export type TrainerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    specialization?: TrainerUpdatespecializationInput | $Enums.TrainingType[]
  }

  export type AdminCreateInput = {
    id?: string
    user: BaseUserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    userId: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: BaseUserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    userId: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TrainingSessionCreateInput = {
    id?: string
    trainingType: $Enums.TrainingType
    date: Date | string
    startTime: $Enums.TrainingTimeSlot
    durationMinutes?: number
    maxParticipants?: number
    coinsRequired?: number
    status?: $Enums.TrainingStatus
    qrCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainer: TrainerCreateNestedOneWithoutTrainingSessionsInput
    bookings?: BookingCreateNestedManyWithoutTrainingSessionInput
  }

  export type TrainingSessionUncheckedCreateInput = {
    id?: string
    trainerId: string
    trainingType: $Enums.TrainingType
    date: Date | string
    startTime: $Enums.TrainingTimeSlot
    durationMinutes?: number
    maxParticipants?: number
    coinsRequired?: number
    status?: $Enums.TrainingStatus
    qrCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutTrainingSessionInput
  }

  export type TrainingSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: EnumTrainingTimeSlotFieldUpdateOperationsInput | $Enums.TrainingTimeSlot
    durationMinutes?: IntFieldUpdateOperationsInput | number
    maxParticipants?: IntFieldUpdateOperationsInput | number
    coinsRequired?: IntFieldUpdateOperationsInput | number
    status?: EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainer?: TrainerUpdateOneRequiredWithoutTrainingSessionsNestedInput
    bookings?: BookingUpdateManyWithoutTrainingSessionNestedInput
  }

  export type TrainingSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainerId?: StringFieldUpdateOperationsInput | string
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: EnumTrainingTimeSlotFieldUpdateOperationsInput | $Enums.TrainingTimeSlot
    durationMinutes?: IntFieldUpdateOperationsInput | number
    maxParticipants?: IntFieldUpdateOperationsInput | number
    coinsRequired?: IntFieldUpdateOperationsInput | number
    status?: EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutTrainingSessionNestedInput
  }

  export type TrainingSessionCreateManyInput = {
    id?: string
    trainerId: string
    trainingType: $Enums.TrainingType
    date: Date | string
    startTime: $Enums.TrainingTimeSlot
    durationMinutes?: number
    maxParticipants?: number
    coinsRequired?: number
    status?: $Enums.TrainingStatus
    qrCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: EnumTrainingTimeSlotFieldUpdateOperationsInput | $Enums.TrainingTimeSlot
    durationMinutes?: IntFieldUpdateOperationsInput | number
    maxParticipants?: IntFieldUpdateOperationsInput | number
    coinsRequired?: IntFieldUpdateOperationsInput | number
    status?: EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainingSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainerId?: StringFieldUpdateOperationsInput | string
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: EnumTrainingTimeSlotFieldUpdateOperationsInput | $Enums.TrainingTimeSlot
    durationMinutes?: IntFieldUpdateOperationsInput | number
    maxParticipants?: IntFieldUpdateOperationsInput | number
    coinsRequired?: IntFieldUpdateOperationsInput | number
    status?: EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutBookingsInput
    trainingSession: TrainingSessionCreateNestedOneWithoutBookingsInput
    coinsTransactions?: CoinsTransactionCreateNestedManyWithoutRelatedBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    trainingSessionId: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coinsTransactions?: CoinsTransactionUncheckedCreateNestedManyWithoutRelatedBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    trainingSession?: TrainingSessionUpdateOneRequiredWithoutBookingsNestedInput
    coinsTransactions?: CoinsTransactionUpdateManyWithoutRelatedBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trainingSessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinsTransactions?: CoinsTransactionUncheckedUpdateManyWithoutRelatedBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    trainingSessionId: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trainingSessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsTransactionCreateInput = {
    id?: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCoinsTransactionsInput
    relatedBooking?: BookingCreateNestedOneWithoutCoinsTransactionsInput
    coinsPurchase?: CoinsPurchaseCreateNestedOneWithoutCoinsTransactionInput
  }

  export type CoinsTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    relatedBookingId?: string | null
    orderId?: string | null
    createdAt?: Date | string
  }

  export type CoinsTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCoinsTransactionsNestedInput
    relatedBooking?: BookingUpdateOneWithoutCoinsTransactionsNestedInput
    coinsPurchase?: CoinsPurchaseUpdateOneWithoutCoinsTransactionNestedInput
  }

  export type CoinsTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsTransactionCreateManyInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    relatedBookingId?: string | null
    orderId?: string | null
    createdAt?: Date | string
  }

  export type CoinsTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsPurchaseCreateInput = {
    id?: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    customer: CustomerCreateNestedOneWithoutCoinsPurchasesInput
    coinsPackage: CoinsPackageCreateNestedOneWithoutCoinsPurchasesInput
    coinsTransaction?: CoinsTransactionCreateNestedOneWithoutCoinsPurchaseInput
  }

  export type CoinsPurchaseUncheckedCreateInput = {
    id?: string
    userId: string
    coinsPackageId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    coinsTransaction?: CoinsTransactionUncheckedCreateNestedOneWithoutCoinsPurchaseInput
  }

  export type CoinsPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutCoinsPurchasesNestedInput
    coinsPackage?: CoinsPackageUpdateOneRequiredWithoutCoinsPurchasesNestedInput
    coinsTransaction?: CoinsTransactionUpdateOneWithoutCoinsPurchaseNestedInput
  }

  export type CoinsPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coinsPackageId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coinsTransaction?: CoinsTransactionUncheckedUpdateOneWithoutCoinsPurchaseNestedInput
  }

  export type CoinsPurchaseCreateManyInput = {
    id?: string
    userId: string
    coinsPackageId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CoinsPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CoinsPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coinsPackageId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CoinsPackageCreateInput = {
    id?: string
    name: string
    coins: number
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    coinsPurchases?: CoinsPurchaseCreateNestedManyWithoutCoinsPackageInput
  }

  export type CoinsPackageUncheckedCreateInput = {
    id?: string
    name: string
    coins: number
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    coinsPurchases?: CoinsPurchaseUncheckedCreateNestedManyWithoutCoinsPackageInput
  }

  export type CoinsPackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinsPurchases?: CoinsPurchaseUpdateManyWithoutCoinsPackageNestedInput
  }

  export type CoinsPackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinsPurchases?: CoinsPurchaseUncheckedUpdateManyWithoutCoinsPackageNestedInput
  }

  export type CoinsPackageCreateManyInput = {
    id?: string
    name: string
    coins: number
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoinsPackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsPackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type TrainerNullableScalarRelationFilter = {
    is?: TrainerWhereInput | null
    isNot?: TrainerWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserConsentListRelationFilter = {
    every?: UserConsentWhereInput
    some?: UserConsentWhereInput
    none?: UserConsentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserConsentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BaseUserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    passwordLastChanged?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpiry?: SortOrder
  }

  export type BaseUserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    passwordLastChanged?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpiry?: SortOrder
  }

  export type BaseUserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    birthDate?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    passwordLastChanged?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpiry?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumTrainingTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.TrainingType | EnumTrainingTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BaseUserScalarRelationFilter = {
    is?: BaseUserWhereInput
    isNot?: BaseUserWhereInput
  }

  export type CoinsTransactionListRelationFilter = {
    every?: CoinsTransactionWhereInput
    some?: CoinsTransactionWhereInput
    none?: CoinsTransactionWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type CoinsPurchaseListRelationFilter = {
    every?: CoinsPurchaseWhereInput
    some?: CoinsPurchaseWhereInput
    none?: CoinsPurchaseWhereInput
  }

  export type CoinsTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoinsPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coins?: SortOrder
    preferredTrainingTypes?: SortOrder
    emergencyContact?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    coins?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coins?: SortOrder
    emergencyContact?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coins?: SortOrder
    emergencyContact?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    coins?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumConsentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentType | EnumConsentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentTypeFilter<$PrismaModel> | $Enums.ConsentType
  }

  export type UserConsentUserIdConsentTypeCompoundUniqueInput = {
    userId: string
    consentType: $Enums.ConsentType
  }

  export type UserConsentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    consentType?: SortOrder
    granted?: SortOrder
    grantedAt?: SortOrder
    revokedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type UserConsentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    consentType?: SortOrder
    granted?: SortOrder
    grantedAt?: SortOrder
    revokedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type UserConsentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    consentType?: SortOrder
    granted?: SortOrder
    grantedAt?: SortOrder
    revokedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type EnumConsentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentType | EnumConsentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConsentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsentTypeFilter<$PrismaModel>
    _max?: NestedEnumConsentTypeFilter<$PrismaModel>
  }

  export type TrainingSessionListRelationFilter = {
    every?: TrainingSessionWhereInput
    some?: TrainingSessionWhereInput
    none?: TrainingSessionWhereInput
  }

  export type TrainingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    certification?: SortOrder
    specialization?: SortOrder
  }

  export type TrainerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    certification?: SortOrder
  }

  export type TrainerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    certification?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTrainingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingType | EnumTrainingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTypeFilter<$PrismaModel> | $Enums.TrainingType
  }

  export type EnumTrainingTimeSlotFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingTimeSlot | EnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingTimeSlot[] | ListEnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingTimeSlot[] | ListEnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTimeSlotFilter<$PrismaModel> | $Enums.TrainingTimeSlot
  }

  export type EnumTrainingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingStatus | EnumTrainingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingStatus[] | ListEnumTrainingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingStatus[] | ListEnumTrainingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingStatusFilter<$PrismaModel> | $Enums.TrainingStatus
  }

  export type TrainerScalarRelationFilter = {
    is?: TrainerWhereInput
    isNot?: TrainerWhereInput
  }

  export type TrainingSessionDateStartTimeCompoundUniqueInput = {
    date: Date | string
    startTime: $Enums.TrainingTimeSlot
  }

  export type TrainingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    trainerId?: SortOrder
    trainingType?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    durationMinutes?: SortOrder
    maxParticipants?: SortOrder
    coinsRequired?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingSessionAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
    maxParticipants?: SortOrder
    coinsRequired?: SortOrder
  }

  export type TrainingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    trainerId?: SortOrder
    trainingType?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    durationMinutes?: SortOrder
    maxParticipants?: SortOrder
    coinsRequired?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    trainerId?: SortOrder
    trainingType?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    durationMinutes?: SortOrder
    maxParticipants?: SortOrder
    coinsRequired?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainingSessionSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
    maxParticipants?: SortOrder
    coinsRequired?: SortOrder
  }

  export type EnumTrainingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingType | EnumTrainingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTypeWithAggregatesFilter<$PrismaModel> | $Enums.TrainingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingTypeFilter<$PrismaModel>
    _max?: NestedEnumTrainingTypeFilter<$PrismaModel>
  }

  export type EnumTrainingTimeSlotWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingTimeSlot | EnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingTimeSlot[] | ListEnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingTimeSlot[] | ListEnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTimeSlotWithAggregatesFilter<$PrismaModel> | $Enums.TrainingTimeSlot
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingTimeSlotFilter<$PrismaModel>
    _max?: NestedEnumTrainingTimeSlotFilter<$PrismaModel>
  }

  export type EnumTrainingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingStatus | EnumTrainingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingStatus[] | ListEnumTrainingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingStatus[] | ListEnumTrainingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingStatusWithAggregatesFilter<$PrismaModel> | $Enums.TrainingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingStatusFilter<$PrismaModel>
    _max?: NestedEnumTrainingStatusFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type TrainingSessionScalarRelationFilter = {
    is?: TrainingSessionWhereInput
    isNot?: TrainingSessionWhereInput
  }

  export type BookingUserIdTrainingSessionIdCompoundUniqueInput = {
    userId: string
    trainingSessionId: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainingSessionId?: SortOrder
    status?: SortOrder
    coinsUsed?: SortOrder
    bookedAt?: SortOrder
    cancelledAt?: SortOrder
    attendedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    coinsUsed?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainingSessionId?: SortOrder
    status?: SortOrder
    coinsUsed?: SortOrder
    bookedAt?: SortOrder
    cancelledAt?: SortOrder
    attendedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trainingSessionId?: SortOrder
    status?: SortOrder
    coinsUsed?: SortOrder
    bookedAt?: SortOrder
    cancelledAt?: SortOrder
    attendedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    coinsUsed?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumCoinsTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CoinsTransactionType | EnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoinsTransactionType[] | ListEnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoinsTransactionType[] | ListEnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoinsTransactionTypeFilter<$PrismaModel> | $Enums.CoinsTransactionType
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type CoinsPurchaseNullableScalarRelationFilter = {
    is?: CoinsPurchaseWhereInput | null
    isNot?: CoinsPurchaseWhereInput | null
  }

  export type CoinsTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    balanceAfter?: SortOrder
    relatedBookingId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
  }

  export type CoinsTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type CoinsTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    balanceAfter?: SortOrder
    relatedBookingId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
  }

  export type CoinsTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    balanceAfter?: SortOrder
    relatedBookingId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
  }

  export type CoinsTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
    balanceAfter?: SortOrder
  }

  export type EnumCoinsTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoinsTransactionType | EnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoinsTransactionType[] | ListEnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoinsTransactionType[] | ListEnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoinsTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CoinsTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoinsTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumCoinsTransactionTypeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type CoinsPackageScalarRelationFilter = {
    is?: CoinsPackageWhereInput
    isNot?: CoinsPackageWhereInput
  }

  export type CoinsTransactionNullableScalarRelationFilter = {
    is?: CoinsTransactionWhereInput | null
    isNot?: CoinsTransactionWhereInput | null
  }

  export type CoinsPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coinsPackageId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentIntentId?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type CoinsPurchaseAvgOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type CoinsPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coinsPackageId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentIntentId?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type CoinsPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    coinsPackageId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentIntentId?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type CoinsPurchaseSumOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CoinsPackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coins?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    description?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoinsPackageAvgOrderByAggregateInput = {
    coins?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type CoinsPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coins?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    description?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoinsPackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coins?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    description?: SortOrder
    stripePriceId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoinsPackageSumOrderByAggregateInput = {
    coins?: SortOrder
    price?: SortOrder
    discount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CustomerCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type TrainerCreateNestedOneWithoutUserInput = {
    create?: XOR<TrainerCreateWithoutUserInput, TrainerUncheckedCreateWithoutUserInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutUserInput
    connect?: TrainerWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type UserConsentCreateNestedManyWithoutUserInput = {
    create?: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput> | UserConsentCreateWithoutUserInput[] | UserConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConsentCreateOrConnectWithoutUserInput | UserConsentCreateOrConnectWithoutUserInput[]
    createMany?: UserConsentCreateManyUserInputEnvelope
    connect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    connect?: CustomerWhereUniqueInput
  }

  export type TrainerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TrainerCreateWithoutUserInput, TrainerUncheckedCreateWithoutUserInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutUserInput
    connect?: TrainerWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type UserConsentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput> | UserConsentCreateWithoutUserInput[] | UserConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConsentCreateOrConnectWithoutUserInput | UserConsentCreateOrConnectWithoutUserInput[]
    createMany?: UserConsentCreateManyUserInputEnvelope
    connect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserInput, CustomerUpdateWithoutUserInput>, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type TrainerUpdateOneWithoutUserNestedInput = {
    create?: XOR<TrainerCreateWithoutUserInput, TrainerUncheckedCreateWithoutUserInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutUserInput
    upsert?: TrainerUpsertWithoutUserInput
    disconnect?: TrainerWhereInput | boolean
    delete?: TrainerWhereInput | boolean
    connect?: TrainerWhereUniqueInput
    update?: XOR<XOR<TrainerUpdateToOneWithWhereWithoutUserInput, TrainerUpdateWithoutUserInput>, TrainerUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserConsentUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput> | UserConsentCreateWithoutUserInput[] | UserConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConsentCreateOrConnectWithoutUserInput | UserConsentCreateOrConnectWithoutUserInput[]
    upsert?: UserConsentUpsertWithWhereUniqueWithoutUserInput | UserConsentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserConsentCreateManyUserInputEnvelope
    set?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    disconnect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    delete?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    connect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    update?: UserConsentUpdateWithWhereUniqueWithoutUserInput | UserConsentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserConsentUpdateManyWithWhereWithoutUserInput | UserConsentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserConsentScalarWhereInput | UserConsentScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput
    upsert?: CustomerUpsertWithoutUserInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutUserInput, CustomerUpdateWithoutUserInput>, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type TrainerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TrainerCreateWithoutUserInput, TrainerUncheckedCreateWithoutUserInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutUserInput
    upsert?: TrainerUpsertWithoutUserInput
    disconnect?: TrainerWhereInput | boolean
    delete?: TrainerWhereInput | boolean
    connect?: TrainerWhereUniqueInput
    update?: XOR<XOR<TrainerUpdateToOneWithWhereWithoutUserInput, TrainerUpdateWithoutUserInput>, TrainerUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserConsentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput> | UserConsentCreateWithoutUserInput[] | UserConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserConsentCreateOrConnectWithoutUserInput | UserConsentCreateOrConnectWithoutUserInput[]
    upsert?: UserConsentUpsertWithWhereUniqueWithoutUserInput | UserConsentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserConsentCreateManyUserInputEnvelope
    set?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    disconnect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    delete?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    connect?: UserConsentWhereUniqueInput | UserConsentWhereUniqueInput[]
    update?: UserConsentUpdateWithWhereUniqueWithoutUserInput | UserConsentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserConsentUpdateManyWithWhereWithoutUserInput | UserConsentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserConsentScalarWhereInput | UserConsentScalarWhereInput[]
  }

  export type CustomerCreatepreferredTrainingTypesInput = {
    set: $Enums.TrainingType[]
  }

  export type BaseUserCreateNestedOneWithoutCustomerInput = {
    create?: XOR<BaseUserCreateWithoutCustomerInput, BaseUserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: BaseUserCreateOrConnectWithoutCustomerInput
    connect?: BaseUserWhereUniqueInput
  }

  export type CoinsTransactionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CoinsTransactionCreateWithoutCustomerInput, CoinsTransactionUncheckedCreateWithoutCustomerInput> | CoinsTransactionCreateWithoutCustomerInput[] | CoinsTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutCustomerInput | CoinsTransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: CoinsTransactionCreateManyCustomerInputEnvelope
    connect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CoinsPurchaseCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CoinsPurchaseCreateWithoutCustomerInput, CoinsPurchaseUncheckedCreateWithoutCustomerInput> | CoinsPurchaseCreateWithoutCustomerInput[] | CoinsPurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CoinsPurchaseCreateOrConnectWithoutCustomerInput | CoinsPurchaseCreateOrConnectWithoutCustomerInput[]
    createMany?: CoinsPurchaseCreateManyCustomerInputEnvelope
    connect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
  }

  export type CoinsTransactionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CoinsTransactionCreateWithoutCustomerInput, CoinsTransactionUncheckedCreateWithoutCustomerInput> | CoinsTransactionCreateWithoutCustomerInput[] | CoinsTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutCustomerInput | CoinsTransactionCreateOrConnectWithoutCustomerInput[]
    createMany?: CoinsTransactionCreateManyCustomerInputEnvelope
    connect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CoinsPurchaseUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CoinsPurchaseCreateWithoutCustomerInput, CoinsPurchaseUncheckedCreateWithoutCustomerInput> | CoinsPurchaseCreateWithoutCustomerInput[] | CoinsPurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CoinsPurchaseCreateOrConnectWithoutCustomerInput | CoinsPurchaseCreateOrConnectWithoutCustomerInput[]
    createMany?: CoinsPurchaseCreateManyCustomerInputEnvelope
    connect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdatepreferredTrainingTypesInput = {
    set?: $Enums.TrainingType[]
    push?: $Enums.TrainingType | $Enums.TrainingType[]
  }

  export type BaseUserUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<BaseUserCreateWithoutCustomerInput, BaseUserUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: BaseUserCreateOrConnectWithoutCustomerInput
    upsert?: BaseUserUpsertWithoutCustomerInput
    connect?: BaseUserWhereUniqueInput
    update?: XOR<XOR<BaseUserUpdateToOneWithWhereWithoutCustomerInput, BaseUserUpdateWithoutCustomerInput>, BaseUserUncheckedUpdateWithoutCustomerInput>
  }

  export type CoinsTransactionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CoinsTransactionCreateWithoutCustomerInput, CoinsTransactionUncheckedCreateWithoutCustomerInput> | CoinsTransactionCreateWithoutCustomerInput[] | CoinsTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutCustomerInput | CoinsTransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: CoinsTransactionUpsertWithWhereUniqueWithoutCustomerInput | CoinsTransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CoinsTransactionCreateManyCustomerInputEnvelope
    set?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    disconnect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    delete?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    connect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    update?: CoinsTransactionUpdateWithWhereUniqueWithoutCustomerInput | CoinsTransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CoinsTransactionUpdateManyWithWhereWithoutCustomerInput | CoinsTransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CoinsTransactionScalarWhereInput | CoinsTransactionScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CoinsPurchaseUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CoinsPurchaseCreateWithoutCustomerInput, CoinsPurchaseUncheckedCreateWithoutCustomerInput> | CoinsPurchaseCreateWithoutCustomerInput[] | CoinsPurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CoinsPurchaseCreateOrConnectWithoutCustomerInput | CoinsPurchaseCreateOrConnectWithoutCustomerInput[]
    upsert?: CoinsPurchaseUpsertWithWhereUniqueWithoutCustomerInput | CoinsPurchaseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CoinsPurchaseCreateManyCustomerInputEnvelope
    set?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    disconnect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    delete?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    connect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    update?: CoinsPurchaseUpdateWithWhereUniqueWithoutCustomerInput | CoinsPurchaseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CoinsPurchaseUpdateManyWithWhereWithoutCustomerInput | CoinsPurchaseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CoinsPurchaseScalarWhereInput | CoinsPurchaseScalarWhereInput[]
  }

  export type CoinsTransactionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CoinsTransactionCreateWithoutCustomerInput, CoinsTransactionUncheckedCreateWithoutCustomerInput> | CoinsTransactionCreateWithoutCustomerInput[] | CoinsTransactionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutCustomerInput | CoinsTransactionCreateOrConnectWithoutCustomerInput[]
    upsert?: CoinsTransactionUpsertWithWhereUniqueWithoutCustomerInput | CoinsTransactionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CoinsTransactionCreateManyCustomerInputEnvelope
    set?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    disconnect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    delete?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    connect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    update?: CoinsTransactionUpdateWithWhereUniqueWithoutCustomerInput | CoinsTransactionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CoinsTransactionUpdateManyWithWhereWithoutCustomerInput | CoinsTransactionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CoinsTransactionScalarWhereInput | CoinsTransactionScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CoinsPurchaseUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CoinsPurchaseCreateWithoutCustomerInput, CoinsPurchaseUncheckedCreateWithoutCustomerInput> | CoinsPurchaseCreateWithoutCustomerInput[] | CoinsPurchaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CoinsPurchaseCreateOrConnectWithoutCustomerInput | CoinsPurchaseCreateOrConnectWithoutCustomerInput[]
    upsert?: CoinsPurchaseUpsertWithWhereUniqueWithoutCustomerInput | CoinsPurchaseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CoinsPurchaseCreateManyCustomerInputEnvelope
    set?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    disconnect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    delete?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    connect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    update?: CoinsPurchaseUpdateWithWhereUniqueWithoutCustomerInput | CoinsPurchaseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CoinsPurchaseUpdateManyWithWhereWithoutCustomerInput | CoinsPurchaseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CoinsPurchaseScalarWhereInput | CoinsPurchaseScalarWhereInput[]
  }

  export type BaseUserCreateNestedOneWithoutUserConsentInput = {
    create?: XOR<BaseUserCreateWithoutUserConsentInput, BaseUserUncheckedCreateWithoutUserConsentInput>
    connectOrCreate?: BaseUserCreateOrConnectWithoutUserConsentInput
    connect?: BaseUserWhereUniqueInput
  }

  export type EnumConsentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConsentType
  }

  export type BaseUserUpdateOneRequiredWithoutUserConsentNestedInput = {
    create?: XOR<BaseUserCreateWithoutUserConsentInput, BaseUserUncheckedCreateWithoutUserConsentInput>
    connectOrCreate?: BaseUserCreateOrConnectWithoutUserConsentInput
    upsert?: BaseUserUpsertWithoutUserConsentInput
    connect?: BaseUserWhereUniqueInput
    update?: XOR<XOR<BaseUserUpdateToOneWithWhereWithoutUserConsentInput, BaseUserUpdateWithoutUserConsentInput>, BaseUserUncheckedUpdateWithoutUserConsentInput>
  }

  export type TrainerCreatespecializationInput = {
    set: $Enums.TrainingType[]
  }

  export type BaseUserCreateNestedOneWithoutTrainerInput = {
    create?: XOR<BaseUserCreateWithoutTrainerInput, BaseUserUncheckedCreateWithoutTrainerInput>
    connectOrCreate?: BaseUserCreateOrConnectWithoutTrainerInput
    connect?: BaseUserWhereUniqueInput
  }

  export type TrainingSessionCreateNestedManyWithoutTrainerInput = {
    create?: XOR<TrainingSessionCreateWithoutTrainerInput, TrainingSessionUncheckedCreateWithoutTrainerInput> | TrainingSessionCreateWithoutTrainerInput[] | TrainingSessionUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: TrainingSessionCreateOrConnectWithoutTrainerInput | TrainingSessionCreateOrConnectWithoutTrainerInput[]
    createMany?: TrainingSessionCreateManyTrainerInputEnvelope
    connect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
  }

  export type TrainingSessionUncheckedCreateNestedManyWithoutTrainerInput = {
    create?: XOR<TrainingSessionCreateWithoutTrainerInput, TrainingSessionUncheckedCreateWithoutTrainerInput> | TrainingSessionCreateWithoutTrainerInput[] | TrainingSessionUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: TrainingSessionCreateOrConnectWithoutTrainerInput | TrainingSessionCreateOrConnectWithoutTrainerInput[]
    createMany?: TrainingSessionCreateManyTrainerInputEnvelope
    connect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
  }

  export type TrainerUpdatespecializationInput = {
    set?: $Enums.TrainingType[]
    push?: $Enums.TrainingType | $Enums.TrainingType[]
  }

  export type BaseUserUpdateOneRequiredWithoutTrainerNestedInput = {
    create?: XOR<BaseUserCreateWithoutTrainerInput, BaseUserUncheckedCreateWithoutTrainerInput>
    connectOrCreate?: BaseUserCreateOrConnectWithoutTrainerInput
    upsert?: BaseUserUpsertWithoutTrainerInput
    connect?: BaseUserWhereUniqueInput
    update?: XOR<XOR<BaseUserUpdateToOneWithWhereWithoutTrainerInput, BaseUserUpdateWithoutTrainerInput>, BaseUserUncheckedUpdateWithoutTrainerInput>
  }

  export type TrainingSessionUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<TrainingSessionCreateWithoutTrainerInput, TrainingSessionUncheckedCreateWithoutTrainerInput> | TrainingSessionCreateWithoutTrainerInput[] | TrainingSessionUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: TrainingSessionCreateOrConnectWithoutTrainerInput | TrainingSessionCreateOrConnectWithoutTrainerInput[]
    upsert?: TrainingSessionUpsertWithWhereUniqueWithoutTrainerInput | TrainingSessionUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: TrainingSessionCreateManyTrainerInputEnvelope
    set?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    disconnect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    delete?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    connect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    update?: TrainingSessionUpdateWithWhereUniqueWithoutTrainerInput | TrainingSessionUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: TrainingSessionUpdateManyWithWhereWithoutTrainerInput | TrainingSessionUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: TrainingSessionScalarWhereInput | TrainingSessionScalarWhereInput[]
  }

  export type TrainingSessionUncheckedUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<TrainingSessionCreateWithoutTrainerInput, TrainingSessionUncheckedCreateWithoutTrainerInput> | TrainingSessionCreateWithoutTrainerInput[] | TrainingSessionUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: TrainingSessionCreateOrConnectWithoutTrainerInput | TrainingSessionCreateOrConnectWithoutTrainerInput[]
    upsert?: TrainingSessionUpsertWithWhereUniqueWithoutTrainerInput | TrainingSessionUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: TrainingSessionCreateManyTrainerInputEnvelope
    set?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    disconnect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    delete?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    connect?: TrainingSessionWhereUniqueInput | TrainingSessionWhereUniqueInput[]
    update?: TrainingSessionUpdateWithWhereUniqueWithoutTrainerInput | TrainingSessionUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: TrainingSessionUpdateManyWithWhereWithoutTrainerInput | TrainingSessionUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: TrainingSessionScalarWhereInput | TrainingSessionScalarWhereInput[]
  }

  export type BaseUserCreateNestedOneWithoutAdminInput = {
    create?: XOR<BaseUserCreateWithoutAdminInput, BaseUserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: BaseUserCreateOrConnectWithoutAdminInput
    connect?: BaseUserWhereUniqueInput
  }

  export type BaseUserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<BaseUserCreateWithoutAdminInput, BaseUserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: BaseUserCreateOrConnectWithoutAdminInput
    upsert?: BaseUserUpsertWithoutAdminInput
    connect?: BaseUserWhereUniqueInput
    update?: XOR<XOR<BaseUserUpdateToOneWithWhereWithoutAdminInput, BaseUserUpdateWithoutAdminInput>, BaseUserUncheckedUpdateWithoutAdminInput>
  }

  export type TrainerCreateNestedOneWithoutTrainingSessionsInput = {
    create?: XOR<TrainerCreateWithoutTrainingSessionsInput, TrainerUncheckedCreateWithoutTrainingSessionsInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutTrainingSessionsInput
    connect?: TrainerWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutTrainingSessionInput = {
    create?: XOR<BookingCreateWithoutTrainingSessionInput, BookingUncheckedCreateWithoutTrainingSessionInput> | BookingCreateWithoutTrainingSessionInput[] | BookingUncheckedCreateWithoutTrainingSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTrainingSessionInput | BookingCreateOrConnectWithoutTrainingSessionInput[]
    createMany?: BookingCreateManyTrainingSessionInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTrainingSessionInput = {
    create?: XOR<BookingCreateWithoutTrainingSessionInput, BookingUncheckedCreateWithoutTrainingSessionInput> | BookingCreateWithoutTrainingSessionInput[] | BookingUncheckedCreateWithoutTrainingSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTrainingSessionInput | BookingCreateOrConnectWithoutTrainingSessionInput[]
    createMany?: BookingCreateManyTrainingSessionInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EnumTrainingTypeFieldUpdateOperationsInput = {
    set?: $Enums.TrainingType
  }

  export type EnumTrainingTimeSlotFieldUpdateOperationsInput = {
    set?: $Enums.TrainingTimeSlot
  }

  export type EnumTrainingStatusFieldUpdateOperationsInput = {
    set?: $Enums.TrainingStatus
  }

  export type TrainerUpdateOneRequiredWithoutTrainingSessionsNestedInput = {
    create?: XOR<TrainerCreateWithoutTrainingSessionsInput, TrainerUncheckedCreateWithoutTrainingSessionsInput>
    connectOrCreate?: TrainerCreateOrConnectWithoutTrainingSessionsInput
    upsert?: TrainerUpsertWithoutTrainingSessionsInput
    connect?: TrainerWhereUniqueInput
    update?: XOR<XOR<TrainerUpdateToOneWithWhereWithoutTrainingSessionsInput, TrainerUpdateWithoutTrainingSessionsInput>, TrainerUncheckedUpdateWithoutTrainingSessionsInput>
  }

  export type BookingUpdateManyWithoutTrainingSessionNestedInput = {
    create?: XOR<BookingCreateWithoutTrainingSessionInput, BookingUncheckedCreateWithoutTrainingSessionInput> | BookingCreateWithoutTrainingSessionInput[] | BookingUncheckedCreateWithoutTrainingSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTrainingSessionInput | BookingCreateOrConnectWithoutTrainingSessionInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTrainingSessionInput | BookingUpsertWithWhereUniqueWithoutTrainingSessionInput[]
    createMany?: BookingCreateManyTrainingSessionInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTrainingSessionInput | BookingUpdateWithWhereUniqueWithoutTrainingSessionInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTrainingSessionInput | BookingUpdateManyWithWhereWithoutTrainingSessionInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTrainingSessionNestedInput = {
    create?: XOR<BookingCreateWithoutTrainingSessionInput, BookingUncheckedCreateWithoutTrainingSessionInput> | BookingCreateWithoutTrainingSessionInput[] | BookingUncheckedCreateWithoutTrainingSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTrainingSessionInput | BookingCreateOrConnectWithoutTrainingSessionInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTrainingSessionInput | BookingUpsertWithWhereUniqueWithoutTrainingSessionInput[]
    createMany?: BookingCreateManyTrainingSessionInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTrainingSessionInput | BookingUpdateWithWhereUniqueWithoutTrainingSessionInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTrainingSessionInput | BookingUpdateManyWithWhereWithoutTrainingSessionInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
  }

  export type TrainingSessionCreateNestedOneWithoutBookingsInput = {
    create?: XOR<TrainingSessionCreateWithoutBookingsInput, TrainingSessionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TrainingSessionCreateOrConnectWithoutBookingsInput
    connect?: TrainingSessionWhereUniqueInput
  }

  export type CoinsTransactionCreateNestedManyWithoutRelatedBookingInput = {
    create?: XOR<CoinsTransactionCreateWithoutRelatedBookingInput, CoinsTransactionUncheckedCreateWithoutRelatedBookingInput> | CoinsTransactionCreateWithoutRelatedBookingInput[] | CoinsTransactionUncheckedCreateWithoutRelatedBookingInput[]
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutRelatedBookingInput | CoinsTransactionCreateOrConnectWithoutRelatedBookingInput[]
    createMany?: CoinsTransactionCreateManyRelatedBookingInputEnvelope
    connect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
  }

  export type CoinsTransactionUncheckedCreateNestedManyWithoutRelatedBookingInput = {
    create?: XOR<CoinsTransactionCreateWithoutRelatedBookingInput, CoinsTransactionUncheckedCreateWithoutRelatedBookingInput> | CoinsTransactionCreateWithoutRelatedBookingInput[] | CoinsTransactionUncheckedCreateWithoutRelatedBookingInput[]
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutRelatedBookingInput | CoinsTransactionCreateOrConnectWithoutRelatedBookingInput[]
    createMany?: CoinsTransactionCreateManyRelatedBookingInputEnvelope
    connect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type CustomerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    upsert?: CustomerUpsertWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBookingsInput, CustomerUpdateWithoutBookingsInput>, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type TrainingSessionUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<TrainingSessionCreateWithoutBookingsInput, TrainingSessionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TrainingSessionCreateOrConnectWithoutBookingsInput
    upsert?: TrainingSessionUpsertWithoutBookingsInput
    connect?: TrainingSessionWhereUniqueInput
    update?: XOR<XOR<TrainingSessionUpdateToOneWithWhereWithoutBookingsInput, TrainingSessionUpdateWithoutBookingsInput>, TrainingSessionUncheckedUpdateWithoutBookingsInput>
  }

  export type CoinsTransactionUpdateManyWithoutRelatedBookingNestedInput = {
    create?: XOR<CoinsTransactionCreateWithoutRelatedBookingInput, CoinsTransactionUncheckedCreateWithoutRelatedBookingInput> | CoinsTransactionCreateWithoutRelatedBookingInput[] | CoinsTransactionUncheckedCreateWithoutRelatedBookingInput[]
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutRelatedBookingInput | CoinsTransactionCreateOrConnectWithoutRelatedBookingInput[]
    upsert?: CoinsTransactionUpsertWithWhereUniqueWithoutRelatedBookingInput | CoinsTransactionUpsertWithWhereUniqueWithoutRelatedBookingInput[]
    createMany?: CoinsTransactionCreateManyRelatedBookingInputEnvelope
    set?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    disconnect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    delete?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    connect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    update?: CoinsTransactionUpdateWithWhereUniqueWithoutRelatedBookingInput | CoinsTransactionUpdateWithWhereUniqueWithoutRelatedBookingInput[]
    updateMany?: CoinsTransactionUpdateManyWithWhereWithoutRelatedBookingInput | CoinsTransactionUpdateManyWithWhereWithoutRelatedBookingInput[]
    deleteMany?: CoinsTransactionScalarWhereInput | CoinsTransactionScalarWhereInput[]
  }

  export type CoinsTransactionUncheckedUpdateManyWithoutRelatedBookingNestedInput = {
    create?: XOR<CoinsTransactionCreateWithoutRelatedBookingInput, CoinsTransactionUncheckedCreateWithoutRelatedBookingInput> | CoinsTransactionCreateWithoutRelatedBookingInput[] | CoinsTransactionUncheckedCreateWithoutRelatedBookingInput[]
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutRelatedBookingInput | CoinsTransactionCreateOrConnectWithoutRelatedBookingInput[]
    upsert?: CoinsTransactionUpsertWithWhereUniqueWithoutRelatedBookingInput | CoinsTransactionUpsertWithWhereUniqueWithoutRelatedBookingInput[]
    createMany?: CoinsTransactionCreateManyRelatedBookingInputEnvelope
    set?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    disconnect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    delete?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    connect?: CoinsTransactionWhereUniqueInput | CoinsTransactionWhereUniqueInput[]
    update?: CoinsTransactionUpdateWithWhereUniqueWithoutRelatedBookingInput | CoinsTransactionUpdateWithWhereUniqueWithoutRelatedBookingInput[]
    updateMany?: CoinsTransactionUpdateManyWithWhereWithoutRelatedBookingInput | CoinsTransactionUpdateManyWithWhereWithoutRelatedBookingInput[]
    deleteMany?: CoinsTransactionScalarWhereInput | CoinsTransactionScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutCoinsTransactionsInput = {
    create?: XOR<CustomerCreateWithoutCoinsTransactionsInput, CustomerUncheckedCreateWithoutCoinsTransactionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCoinsTransactionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutCoinsTransactionsInput = {
    create?: XOR<BookingCreateWithoutCoinsTransactionsInput, BookingUncheckedCreateWithoutCoinsTransactionsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCoinsTransactionsInput
    connect?: BookingWhereUniqueInput
  }

  export type CoinsPurchaseCreateNestedOneWithoutCoinsTransactionInput = {
    create?: XOR<CoinsPurchaseCreateWithoutCoinsTransactionInput, CoinsPurchaseUncheckedCreateWithoutCoinsTransactionInput>
    connectOrCreate?: CoinsPurchaseCreateOrConnectWithoutCoinsTransactionInput
    connect?: CoinsPurchaseWhereUniqueInput
  }

  export type EnumCoinsTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CoinsTransactionType
  }

  export type CustomerUpdateOneRequiredWithoutCoinsTransactionsNestedInput = {
    create?: XOR<CustomerCreateWithoutCoinsTransactionsInput, CustomerUncheckedCreateWithoutCoinsTransactionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCoinsTransactionsInput
    upsert?: CustomerUpsertWithoutCoinsTransactionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCoinsTransactionsInput, CustomerUpdateWithoutCoinsTransactionsInput>, CustomerUncheckedUpdateWithoutCoinsTransactionsInput>
  }

  export type BookingUpdateOneWithoutCoinsTransactionsNestedInput = {
    create?: XOR<BookingCreateWithoutCoinsTransactionsInput, BookingUncheckedCreateWithoutCoinsTransactionsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCoinsTransactionsInput
    upsert?: BookingUpsertWithoutCoinsTransactionsInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutCoinsTransactionsInput, BookingUpdateWithoutCoinsTransactionsInput>, BookingUncheckedUpdateWithoutCoinsTransactionsInput>
  }

  export type CoinsPurchaseUpdateOneWithoutCoinsTransactionNestedInput = {
    create?: XOR<CoinsPurchaseCreateWithoutCoinsTransactionInput, CoinsPurchaseUncheckedCreateWithoutCoinsTransactionInput>
    connectOrCreate?: CoinsPurchaseCreateOrConnectWithoutCoinsTransactionInput
    upsert?: CoinsPurchaseUpsertWithoutCoinsTransactionInput
    disconnect?: CoinsPurchaseWhereInput | boolean
    delete?: CoinsPurchaseWhereInput | boolean
    connect?: CoinsPurchaseWhereUniqueInput
    update?: XOR<XOR<CoinsPurchaseUpdateToOneWithWhereWithoutCoinsTransactionInput, CoinsPurchaseUpdateWithoutCoinsTransactionInput>, CoinsPurchaseUncheckedUpdateWithoutCoinsTransactionInput>
  }

  export type CustomerCreateNestedOneWithoutCoinsPurchasesInput = {
    create?: XOR<CustomerCreateWithoutCoinsPurchasesInput, CustomerUncheckedCreateWithoutCoinsPurchasesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCoinsPurchasesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CoinsPackageCreateNestedOneWithoutCoinsPurchasesInput = {
    create?: XOR<CoinsPackageCreateWithoutCoinsPurchasesInput, CoinsPackageUncheckedCreateWithoutCoinsPurchasesInput>
    connectOrCreate?: CoinsPackageCreateOrConnectWithoutCoinsPurchasesInput
    connect?: CoinsPackageWhereUniqueInput
  }

  export type CoinsTransactionCreateNestedOneWithoutCoinsPurchaseInput = {
    create?: XOR<CoinsTransactionCreateWithoutCoinsPurchaseInput, CoinsTransactionUncheckedCreateWithoutCoinsPurchaseInput>
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutCoinsPurchaseInput
    connect?: CoinsTransactionWhereUniqueInput
  }

  export type CoinsTransactionUncheckedCreateNestedOneWithoutCoinsPurchaseInput = {
    create?: XOR<CoinsTransactionCreateWithoutCoinsPurchaseInput, CoinsTransactionUncheckedCreateWithoutCoinsPurchaseInput>
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutCoinsPurchaseInput
    connect?: CoinsTransactionWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type CustomerUpdateOneRequiredWithoutCoinsPurchasesNestedInput = {
    create?: XOR<CustomerCreateWithoutCoinsPurchasesInput, CustomerUncheckedCreateWithoutCoinsPurchasesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCoinsPurchasesInput
    upsert?: CustomerUpsertWithoutCoinsPurchasesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCoinsPurchasesInput, CustomerUpdateWithoutCoinsPurchasesInput>, CustomerUncheckedUpdateWithoutCoinsPurchasesInput>
  }

  export type CoinsPackageUpdateOneRequiredWithoutCoinsPurchasesNestedInput = {
    create?: XOR<CoinsPackageCreateWithoutCoinsPurchasesInput, CoinsPackageUncheckedCreateWithoutCoinsPurchasesInput>
    connectOrCreate?: CoinsPackageCreateOrConnectWithoutCoinsPurchasesInput
    upsert?: CoinsPackageUpsertWithoutCoinsPurchasesInput
    connect?: CoinsPackageWhereUniqueInput
    update?: XOR<XOR<CoinsPackageUpdateToOneWithWhereWithoutCoinsPurchasesInput, CoinsPackageUpdateWithoutCoinsPurchasesInput>, CoinsPackageUncheckedUpdateWithoutCoinsPurchasesInput>
  }

  export type CoinsTransactionUpdateOneWithoutCoinsPurchaseNestedInput = {
    create?: XOR<CoinsTransactionCreateWithoutCoinsPurchaseInput, CoinsTransactionUncheckedCreateWithoutCoinsPurchaseInput>
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutCoinsPurchaseInput
    upsert?: CoinsTransactionUpsertWithoutCoinsPurchaseInput
    disconnect?: CoinsTransactionWhereInput | boolean
    delete?: CoinsTransactionWhereInput | boolean
    connect?: CoinsTransactionWhereUniqueInput
    update?: XOR<XOR<CoinsTransactionUpdateToOneWithWhereWithoutCoinsPurchaseInput, CoinsTransactionUpdateWithoutCoinsPurchaseInput>, CoinsTransactionUncheckedUpdateWithoutCoinsPurchaseInput>
  }

  export type CoinsTransactionUncheckedUpdateOneWithoutCoinsPurchaseNestedInput = {
    create?: XOR<CoinsTransactionCreateWithoutCoinsPurchaseInput, CoinsTransactionUncheckedCreateWithoutCoinsPurchaseInput>
    connectOrCreate?: CoinsTransactionCreateOrConnectWithoutCoinsPurchaseInput
    upsert?: CoinsTransactionUpsertWithoutCoinsPurchaseInput
    disconnect?: CoinsTransactionWhereInput | boolean
    delete?: CoinsTransactionWhereInput | boolean
    connect?: CoinsTransactionWhereUniqueInput
    update?: XOR<XOR<CoinsTransactionUpdateToOneWithWhereWithoutCoinsPurchaseInput, CoinsTransactionUpdateWithoutCoinsPurchaseInput>, CoinsTransactionUncheckedUpdateWithoutCoinsPurchaseInput>
  }

  export type CoinsPurchaseCreateNestedManyWithoutCoinsPackageInput = {
    create?: XOR<CoinsPurchaseCreateWithoutCoinsPackageInput, CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput> | CoinsPurchaseCreateWithoutCoinsPackageInput[] | CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput[]
    connectOrCreate?: CoinsPurchaseCreateOrConnectWithoutCoinsPackageInput | CoinsPurchaseCreateOrConnectWithoutCoinsPackageInput[]
    createMany?: CoinsPurchaseCreateManyCoinsPackageInputEnvelope
    connect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
  }

  export type CoinsPurchaseUncheckedCreateNestedManyWithoutCoinsPackageInput = {
    create?: XOR<CoinsPurchaseCreateWithoutCoinsPackageInput, CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput> | CoinsPurchaseCreateWithoutCoinsPackageInput[] | CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput[]
    connectOrCreate?: CoinsPurchaseCreateOrConnectWithoutCoinsPackageInput | CoinsPurchaseCreateOrConnectWithoutCoinsPackageInput[]
    createMany?: CoinsPurchaseCreateManyCoinsPackageInputEnvelope
    connect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CoinsPurchaseUpdateManyWithoutCoinsPackageNestedInput = {
    create?: XOR<CoinsPurchaseCreateWithoutCoinsPackageInput, CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput> | CoinsPurchaseCreateWithoutCoinsPackageInput[] | CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput[]
    connectOrCreate?: CoinsPurchaseCreateOrConnectWithoutCoinsPackageInput | CoinsPurchaseCreateOrConnectWithoutCoinsPackageInput[]
    upsert?: CoinsPurchaseUpsertWithWhereUniqueWithoutCoinsPackageInput | CoinsPurchaseUpsertWithWhereUniqueWithoutCoinsPackageInput[]
    createMany?: CoinsPurchaseCreateManyCoinsPackageInputEnvelope
    set?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    disconnect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    delete?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    connect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    update?: CoinsPurchaseUpdateWithWhereUniqueWithoutCoinsPackageInput | CoinsPurchaseUpdateWithWhereUniqueWithoutCoinsPackageInput[]
    updateMany?: CoinsPurchaseUpdateManyWithWhereWithoutCoinsPackageInput | CoinsPurchaseUpdateManyWithWhereWithoutCoinsPackageInput[]
    deleteMany?: CoinsPurchaseScalarWhereInput | CoinsPurchaseScalarWhereInput[]
  }

  export type CoinsPurchaseUncheckedUpdateManyWithoutCoinsPackageNestedInput = {
    create?: XOR<CoinsPurchaseCreateWithoutCoinsPackageInput, CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput> | CoinsPurchaseCreateWithoutCoinsPackageInput[] | CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput[]
    connectOrCreate?: CoinsPurchaseCreateOrConnectWithoutCoinsPackageInput | CoinsPurchaseCreateOrConnectWithoutCoinsPackageInput[]
    upsert?: CoinsPurchaseUpsertWithWhereUniqueWithoutCoinsPackageInput | CoinsPurchaseUpsertWithWhereUniqueWithoutCoinsPackageInput[]
    createMany?: CoinsPurchaseCreateManyCoinsPackageInputEnvelope
    set?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    disconnect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    delete?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    connect?: CoinsPurchaseWhereUniqueInput | CoinsPurchaseWhereUniqueInput[]
    update?: CoinsPurchaseUpdateWithWhereUniqueWithoutCoinsPackageInput | CoinsPurchaseUpdateWithWhereUniqueWithoutCoinsPackageInput[]
    updateMany?: CoinsPurchaseUpdateManyWithWhereWithoutCoinsPackageInput | CoinsPurchaseUpdateManyWithWhereWithoutCoinsPackageInput[]
    deleteMany?: CoinsPurchaseScalarWhereInput | CoinsPurchaseScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumConsentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentType | EnumConsentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentTypeFilter<$PrismaModel> | $Enums.ConsentType
  }

  export type NestedEnumConsentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentType | EnumConsentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConsentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsentTypeFilter<$PrismaModel>
    _max?: NestedEnumConsentTypeFilter<$PrismaModel>
  }

  export type NestedEnumTrainingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingType | EnumTrainingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTypeFilter<$PrismaModel> | $Enums.TrainingType
  }

  export type NestedEnumTrainingTimeSlotFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingTimeSlot | EnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingTimeSlot[] | ListEnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingTimeSlot[] | ListEnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTimeSlotFilter<$PrismaModel> | $Enums.TrainingTimeSlot
  }

  export type NestedEnumTrainingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingStatus | EnumTrainingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingStatus[] | ListEnumTrainingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingStatus[] | ListEnumTrainingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingStatusFilter<$PrismaModel> | $Enums.TrainingStatus
  }

  export type NestedEnumTrainingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingType | EnumTrainingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingType[] | ListEnumTrainingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTypeWithAggregatesFilter<$PrismaModel> | $Enums.TrainingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingTypeFilter<$PrismaModel>
    _max?: NestedEnumTrainingTypeFilter<$PrismaModel>
  }

  export type NestedEnumTrainingTimeSlotWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingTimeSlot | EnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingTimeSlot[] | ListEnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingTimeSlot[] | ListEnumTrainingTimeSlotFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingTimeSlotWithAggregatesFilter<$PrismaModel> | $Enums.TrainingTimeSlot
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingTimeSlotFilter<$PrismaModel>
    _max?: NestedEnumTrainingTimeSlotFilter<$PrismaModel>
  }

  export type NestedEnumTrainingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrainingStatus | EnumTrainingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TrainingStatus[] | ListEnumTrainingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TrainingStatus[] | ListEnumTrainingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTrainingStatusWithAggregatesFilter<$PrismaModel> | $Enums.TrainingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrainingStatusFilter<$PrismaModel>
    _max?: NestedEnumTrainingStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumCoinsTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CoinsTransactionType | EnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoinsTransactionType[] | ListEnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoinsTransactionType[] | ListEnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoinsTransactionTypeFilter<$PrismaModel> | $Enums.CoinsTransactionType
  }

  export type NestedEnumCoinsTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoinsTransactionType | EnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoinsTransactionType[] | ListEnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoinsTransactionType[] | ListEnumCoinsTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoinsTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CoinsTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoinsTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumCoinsTransactionTypeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CustomerCreateWithoutUserInput = {
    id?: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
    coinsTransactions?: CoinsTransactionCreateNestedManyWithoutCustomerInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
    coinsPurchases?: CoinsPurchaseCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
    coinsTransactions?: CoinsTransactionUncheckedCreateNestedManyWithoutCustomerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
    coinsPurchases?: CoinsPurchaseUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type TrainerCreateWithoutUserInput = {
    id?: string
    certification: string
    specialization?: TrainerCreatespecializationInput | $Enums.TrainingType[]
    trainingSessions?: TrainingSessionCreateNestedManyWithoutTrainerInput
  }

  export type TrainerUncheckedCreateWithoutUserInput = {
    id?: string
    certification: string
    specialization?: TrainerCreatespecializationInput | $Enums.TrainingType[]
    trainingSessions?: TrainingSessionUncheckedCreateNestedManyWithoutTrainerInput
  }

  export type TrainerCreateOrConnectWithoutUserInput = {
    where: TrainerWhereUniqueInput
    create: XOR<TrainerCreateWithoutUserInput, TrainerUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type UserConsentCreateWithoutUserInput = {
    id?: string
    consentType: $Enums.ConsentType
    granted: boolean
    grantedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type UserConsentUncheckedCreateWithoutUserInput = {
    id?: string
    consentType: $Enums.ConsentType
    granted: boolean
    grantedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type UserConsentCreateOrConnectWithoutUserInput = {
    where: UserConsentWhereUniqueInput
    create: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput>
  }

  export type UserConsentCreateManyUserInputEnvelope = {
    data: UserConsentCreateManyUserInput | UserConsentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutUserInput = {
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutUserInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    coinsTransactions?: CoinsTransactionUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
    coinsPurchases?: CoinsPurchaseUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    coinsTransactions?: CoinsTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
    coinsPurchases?: CoinsPurchaseUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TrainerUpsertWithoutUserInput = {
    update: XOR<TrainerUpdateWithoutUserInput, TrainerUncheckedUpdateWithoutUserInput>
    create: XOR<TrainerCreateWithoutUserInput, TrainerUncheckedCreateWithoutUserInput>
    where?: TrainerWhereInput
  }

  export type TrainerUpdateToOneWithWhereWithoutUserInput = {
    where?: TrainerWhereInput
    data: XOR<TrainerUpdateWithoutUserInput, TrainerUncheckedUpdateWithoutUserInput>
  }

  export type TrainerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    specialization?: TrainerUpdatespecializationInput | $Enums.TrainingType[]
    trainingSessions?: TrainingSessionUpdateManyWithoutTrainerNestedInput
  }

  export type TrainerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    specialization?: TrainerUpdatespecializationInput | $Enums.TrainingType[]
    trainingSessions?: TrainingSessionUncheckedUpdateManyWithoutTrainerNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserConsentUpsertWithWhereUniqueWithoutUserInput = {
    where: UserConsentWhereUniqueInput
    update: XOR<UserConsentUpdateWithoutUserInput, UserConsentUncheckedUpdateWithoutUserInput>
    create: XOR<UserConsentCreateWithoutUserInput, UserConsentUncheckedCreateWithoutUserInput>
  }

  export type UserConsentUpdateWithWhereUniqueWithoutUserInput = {
    where: UserConsentWhereUniqueInput
    data: XOR<UserConsentUpdateWithoutUserInput, UserConsentUncheckedUpdateWithoutUserInput>
  }

  export type UserConsentUpdateManyWithWhereWithoutUserInput = {
    where: UserConsentScalarWhereInput
    data: XOR<UserConsentUpdateManyMutationInput, UserConsentUncheckedUpdateManyWithoutUserInput>
  }

  export type UserConsentScalarWhereInput = {
    AND?: UserConsentScalarWhereInput | UserConsentScalarWhereInput[]
    OR?: UserConsentScalarWhereInput[]
    NOT?: UserConsentScalarWhereInput | UserConsentScalarWhereInput[]
    id?: StringFilter<"UserConsent"> | string
    userId?: StringFilter<"UserConsent"> | string
    consentType?: EnumConsentTypeFilter<"UserConsent"> | $Enums.ConsentType
    granted?: BoolFilter<"UserConsent"> | boolean
    grantedAt?: DateTimeFilter<"UserConsent"> | Date | string
    revokedAt?: DateTimeNullableFilter<"UserConsent"> | Date | string | null
    ipAddress?: StringNullableFilter<"UserConsent"> | string | null
    userAgent?: StringNullableFilter<"UserConsent"> | string | null
  }

  export type BaseUserCreateWithoutCustomerInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    trainer?: TrainerCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
    UserConsent?: UserConsentCreateNestedManyWithoutUserInput
  }

  export type BaseUserUncheckedCreateWithoutCustomerInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    trainer?: TrainerUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    UserConsent?: UserConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type BaseUserCreateOrConnectWithoutCustomerInput = {
    where: BaseUserWhereUniqueInput
    create: XOR<BaseUserCreateWithoutCustomerInput, BaseUserUncheckedCreateWithoutCustomerInput>
  }

  export type CoinsTransactionCreateWithoutCustomerInput = {
    id?: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    createdAt?: Date | string
    relatedBooking?: BookingCreateNestedOneWithoutCoinsTransactionsInput
    coinsPurchase?: CoinsPurchaseCreateNestedOneWithoutCoinsTransactionInput
  }

  export type CoinsTransactionUncheckedCreateWithoutCustomerInput = {
    id?: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    relatedBookingId?: string | null
    orderId?: string | null
    createdAt?: Date | string
  }

  export type CoinsTransactionCreateOrConnectWithoutCustomerInput = {
    where: CoinsTransactionWhereUniqueInput
    create: XOR<CoinsTransactionCreateWithoutCustomerInput, CoinsTransactionUncheckedCreateWithoutCustomerInput>
  }

  export type CoinsTransactionCreateManyCustomerInputEnvelope = {
    data: CoinsTransactionCreateManyCustomerInput | CoinsTransactionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutCustomerInput = {
    id?: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingSession: TrainingSessionCreateNestedOneWithoutBookingsInput
    coinsTransactions?: CoinsTransactionCreateNestedManyWithoutRelatedBookingInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    id?: string
    trainingSessionId: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coinsTransactions?: CoinsTransactionUncheckedCreateNestedManyWithoutRelatedBookingInput
  }

  export type BookingCreateOrConnectWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingCreateManyCustomerInputEnvelope = {
    data: BookingCreateManyCustomerInput | BookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CoinsPurchaseCreateWithoutCustomerInput = {
    id?: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    coinsPackage: CoinsPackageCreateNestedOneWithoutCoinsPurchasesInput
    coinsTransaction?: CoinsTransactionCreateNestedOneWithoutCoinsPurchaseInput
  }

  export type CoinsPurchaseUncheckedCreateWithoutCustomerInput = {
    id?: string
    coinsPackageId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    coinsTransaction?: CoinsTransactionUncheckedCreateNestedOneWithoutCoinsPurchaseInput
  }

  export type CoinsPurchaseCreateOrConnectWithoutCustomerInput = {
    where: CoinsPurchaseWhereUniqueInput
    create: XOR<CoinsPurchaseCreateWithoutCustomerInput, CoinsPurchaseUncheckedCreateWithoutCustomerInput>
  }

  export type CoinsPurchaseCreateManyCustomerInputEnvelope = {
    data: CoinsPurchaseCreateManyCustomerInput | CoinsPurchaseCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BaseUserUpsertWithoutCustomerInput = {
    update: XOR<BaseUserUpdateWithoutCustomerInput, BaseUserUncheckedUpdateWithoutCustomerInput>
    create: XOR<BaseUserCreateWithoutCustomerInput, BaseUserUncheckedCreateWithoutCustomerInput>
    where?: BaseUserWhereInput
  }

  export type BaseUserUpdateToOneWithWhereWithoutCustomerInput = {
    where?: BaseUserWhereInput
    data: XOR<BaseUserUpdateWithoutCustomerInput, BaseUserUncheckedUpdateWithoutCustomerInput>
  }

  export type BaseUserUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainer?: TrainerUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
    UserConsent?: UserConsentUpdateManyWithoutUserNestedInput
  }

  export type BaseUserUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainer?: TrainerUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    UserConsent?: UserConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CoinsTransactionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CoinsTransactionWhereUniqueInput
    update: XOR<CoinsTransactionUpdateWithoutCustomerInput, CoinsTransactionUncheckedUpdateWithoutCustomerInput>
    create: XOR<CoinsTransactionCreateWithoutCustomerInput, CoinsTransactionUncheckedCreateWithoutCustomerInput>
  }

  export type CoinsTransactionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CoinsTransactionWhereUniqueInput
    data: XOR<CoinsTransactionUpdateWithoutCustomerInput, CoinsTransactionUncheckedUpdateWithoutCustomerInput>
  }

  export type CoinsTransactionUpdateManyWithWhereWithoutCustomerInput = {
    where: CoinsTransactionScalarWhereInput
    data: XOR<CoinsTransactionUpdateManyMutationInput, CoinsTransactionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CoinsTransactionScalarWhereInput = {
    AND?: CoinsTransactionScalarWhereInput | CoinsTransactionScalarWhereInput[]
    OR?: CoinsTransactionScalarWhereInput[]
    NOT?: CoinsTransactionScalarWhereInput | CoinsTransactionScalarWhereInput[]
    id?: StringFilter<"CoinsTransaction"> | string
    userId?: StringFilter<"CoinsTransaction"> | string
    amount?: IntFilter<"CoinsTransaction"> | number
    type?: EnumCoinsTransactionTypeFilter<"CoinsTransaction"> | $Enums.CoinsTransactionType
    description?: StringFilter<"CoinsTransaction"> | string
    balanceAfter?: IntFilter<"CoinsTransaction"> | number
    relatedBookingId?: StringNullableFilter<"CoinsTransaction"> | string | null
    orderId?: StringNullableFilter<"CoinsTransaction"> | string | null
    createdAt?: DateTimeFilter<"CoinsTransaction"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    trainingSessionId?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    coinsUsed?: IntFilter<"Booking"> | number
    bookedAt?: DateTimeFilter<"Booking"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    attendedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type CoinsPurchaseUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CoinsPurchaseWhereUniqueInput
    update: XOR<CoinsPurchaseUpdateWithoutCustomerInput, CoinsPurchaseUncheckedUpdateWithoutCustomerInput>
    create: XOR<CoinsPurchaseCreateWithoutCustomerInput, CoinsPurchaseUncheckedCreateWithoutCustomerInput>
  }

  export type CoinsPurchaseUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CoinsPurchaseWhereUniqueInput
    data: XOR<CoinsPurchaseUpdateWithoutCustomerInput, CoinsPurchaseUncheckedUpdateWithoutCustomerInput>
  }

  export type CoinsPurchaseUpdateManyWithWhereWithoutCustomerInput = {
    where: CoinsPurchaseScalarWhereInput
    data: XOR<CoinsPurchaseUpdateManyMutationInput, CoinsPurchaseUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CoinsPurchaseScalarWhereInput = {
    AND?: CoinsPurchaseScalarWhereInput | CoinsPurchaseScalarWhereInput[]
    OR?: CoinsPurchaseScalarWhereInput[]
    NOT?: CoinsPurchaseScalarWhereInput | CoinsPurchaseScalarWhereInput[]
    id?: StringFilter<"CoinsPurchase"> | string
    userId?: StringFilter<"CoinsPurchase"> | string
    coinsPackageId?: StringFilter<"CoinsPurchase"> | string
    quantity?: IntFilter<"CoinsPurchase"> | number
    totalPrice?: DecimalFilter<"CoinsPurchase"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFilter<"CoinsPurchase"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"CoinsPurchase"> | string | null
    paymentIntentId?: StringNullableFilter<"CoinsPurchase"> | string | null
    createdAt?: DateTimeFilter<"CoinsPurchase"> | Date | string
    completedAt?: DateTimeNullableFilter<"CoinsPurchase"> | Date | string | null
  }

  export type BaseUserCreateWithoutUserConsentInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutUserInput
    trainer?: TrainerCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type BaseUserUncheckedCreateWithoutUserConsentInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    trainer?: TrainerUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type BaseUserCreateOrConnectWithoutUserConsentInput = {
    where: BaseUserWhereUniqueInput
    create: XOR<BaseUserCreateWithoutUserConsentInput, BaseUserUncheckedCreateWithoutUserConsentInput>
  }

  export type BaseUserUpsertWithoutUserConsentInput = {
    update: XOR<BaseUserUpdateWithoutUserConsentInput, BaseUserUncheckedUpdateWithoutUserConsentInput>
    create: XOR<BaseUserCreateWithoutUserConsentInput, BaseUserUncheckedCreateWithoutUserConsentInput>
    where?: BaseUserWhereInput
  }

  export type BaseUserUpdateToOneWithWhereWithoutUserConsentInput = {
    where?: BaseUserWhereInput
    data: XOR<BaseUserUpdateWithoutUserConsentInput, BaseUserUncheckedUpdateWithoutUserConsentInput>
  }

  export type BaseUserUpdateWithoutUserConsentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutUserNestedInput
    trainer?: TrainerUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type BaseUserUncheckedUpdateWithoutUserConsentInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    trainer?: TrainerUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BaseUserCreateWithoutTrainerInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
    UserConsent?: UserConsentCreateNestedManyWithoutUserInput
  }

  export type BaseUserUncheckedCreateWithoutTrainerInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    UserConsent?: UserConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type BaseUserCreateOrConnectWithoutTrainerInput = {
    where: BaseUserWhereUniqueInput
    create: XOR<BaseUserCreateWithoutTrainerInput, BaseUserUncheckedCreateWithoutTrainerInput>
  }

  export type TrainingSessionCreateWithoutTrainerInput = {
    id?: string
    trainingType: $Enums.TrainingType
    date: Date | string
    startTime: $Enums.TrainingTimeSlot
    durationMinutes?: number
    maxParticipants?: number
    coinsRequired?: number
    status?: $Enums.TrainingStatus
    qrCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutTrainingSessionInput
  }

  export type TrainingSessionUncheckedCreateWithoutTrainerInput = {
    id?: string
    trainingType: $Enums.TrainingType
    date: Date | string
    startTime: $Enums.TrainingTimeSlot
    durationMinutes?: number
    maxParticipants?: number
    coinsRequired?: number
    status?: $Enums.TrainingStatus
    qrCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutTrainingSessionInput
  }

  export type TrainingSessionCreateOrConnectWithoutTrainerInput = {
    where: TrainingSessionWhereUniqueInput
    create: XOR<TrainingSessionCreateWithoutTrainerInput, TrainingSessionUncheckedCreateWithoutTrainerInput>
  }

  export type TrainingSessionCreateManyTrainerInputEnvelope = {
    data: TrainingSessionCreateManyTrainerInput | TrainingSessionCreateManyTrainerInput[]
    skipDuplicates?: boolean
  }

  export type BaseUserUpsertWithoutTrainerInput = {
    update: XOR<BaseUserUpdateWithoutTrainerInput, BaseUserUncheckedUpdateWithoutTrainerInput>
    create: XOR<BaseUserCreateWithoutTrainerInput, BaseUserUncheckedCreateWithoutTrainerInput>
    where?: BaseUserWhereInput
  }

  export type BaseUserUpdateToOneWithWhereWithoutTrainerInput = {
    where?: BaseUserWhereInput
    data: XOR<BaseUserUpdateWithoutTrainerInput, BaseUserUncheckedUpdateWithoutTrainerInput>
  }

  export type BaseUserUpdateWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
    UserConsent?: UserConsentUpdateManyWithoutUserNestedInput
  }

  export type BaseUserUncheckedUpdateWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    UserConsent?: UserConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrainingSessionUpsertWithWhereUniqueWithoutTrainerInput = {
    where: TrainingSessionWhereUniqueInput
    update: XOR<TrainingSessionUpdateWithoutTrainerInput, TrainingSessionUncheckedUpdateWithoutTrainerInput>
    create: XOR<TrainingSessionCreateWithoutTrainerInput, TrainingSessionUncheckedCreateWithoutTrainerInput>
  }

  export type TrainingSessionUpdateWithWhereUniqueWithoutTrainerInput = {
    where: TrainingSessionWhereUniqueInput
    data: XOR<TrainingSessionUpdateWithoutTrainerInput, TrainingSessionUncheckedUpdateWithoutTrainerInput>
  }

  export type TrainingSessionUpdateManyWithWhereWithoutTrainerInput = {
    where: TrainingSessionScalarWhereInput
    data: XOR<TrainingSessionUpdateManyMutationInput, TrainingSessionUncheckedUpdateManyWithoutTrainerInput>
  }

  export type TrainingSessionScalarWhereInput = {
    AND?: TrainingSessionScalarWhereInput | TrainingSessionScalarWhereInput[]
    OR?: TrainingSessionScalarWhereInput[]
    NOT?: TrainingSessionScalarWhereInput | TrainingSessionScalarWhereInput[]
    id?: StringFilter<"TrainingSession"> | string
    trainerId?: StringFilter<"TrainingSession"> | string
    trainingType?: EnumTrainingTypeFilter<"TrainingSession"> | $Enums.TrainingType
    date?: DateTimeFilter<"TrainingSession"> | Date | string
    startTime?: EnumTrainingTimeSlotFilter<"TrainingSession"> | $Enums.TrainingTimeSlot
    durationMinutes?: IntFilter<"TrainingSession"> | number
    maxParticipants?: IntFilter<"TrainingSession"> | number
    coinsRequired?: IntFilter<"TrainingSession"> | number
    status?: EnumTrainingStatusFilter<"TrainingSession"> | $Enums.TrainingStatus
    qrCode?: StringFilter<"TrainingSession"> | string
    createdAt?: DateTimeFilter<"TrainingSession"> | Date | string
    updatedAt?: DateTimeFilter<"TrainingSession"> | Date | string
  }

  export type BaseUserCreateWithoutAdminInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutUserInput
    trainer?: TrainerCreateNestedOneWithoutUserInput
    UserConsent?: UserConsentCreateNestedManyWithoutUserInput
  }

  export type BaseUserUncheckedCreateWithoutAdminInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date | string
    phone?: string | null
    address?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string
    passwordLastChanged?: Date | string
    passwordResetToken?: string | null
    passwordResetExpiry?: Date | string | null
    customer?: CustomerUncheckedCreateNestedOneWithoutUserInput
    trainer?: TrainerUncheckedCreateNestedOneWithoutUserInput
    UserConsent?: UserConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type BaseUserCreateOrConnectWithoutAdminInput = {
    where: BaseUserWhereUniqueInput
    create: XOR<BaseUserCreateWithoutAdminInput, BaseUserUncheckedCreateWithoutAdminInput>
  }

  export type BaseUserUpsertWithoutAdminInput = {
    update: XOR<BaseUserUpdateWithoutAdminInput, BaseUserUncheckedUpdateWithoutAdminInput>
    create: XOR<BaseUserCreateWithoutAdminInput, BaseUserUncheckedCreateWithoutAdminInput>
    where?: BaseUserWhereInput
  }

  export type BaseUserUpdateToOneWithWhereWithoutAdminInput = {
    where?: BaseUserWhereInput
    data: XOR<BaseUserUpdateWithoutAdminInput, BaseUserUncheckedUpdateWithoutAdminInput>
  }

  export type BaseUserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutUserNestedInput
    trainer?: TrainerUpdateOneWithoutUserNestedInput
    UserConsent?: UserConsentUpdateManyWithoutUserNestedInput
  }

  export type BaseUserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordLastChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUncheckedUpdateOneWithoutUserNestedInput
    trainer?: TrainerUncheckedUpdateOneWithoutUserNestedInput
    UserConsent?: UserConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TrainerCreateWithoutTrainingSessionsInput = {
    id?: string
    certification: string
    specialization?: TrainerCreatespecializationInput | $Enums.TrainingType[]
    user: BaseUserCreateNestedOneWithoutTrainerInput
  }

  export type TrainerUncheckedCreateWithoutTrainingSessionsInput = {
    id?: string
    userId: string
    certification: string
    specialization?: TrainerCreatespecializationInput | $Enums.TrainingType[]
  }

  export type TrainerCreateOrConnectWithoutTrainingSessionsInput = {
    where: TrainerWhereUniqueInput
    create: XOR<TrainerCreateWithoutTrainingSessionsInput, TrainerUncheckedCreateWithoutTrainingSessionsInput>
  }

  export type BookingCreateWithoutTrainingSessionInput = {
    id?: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutBookingsInput
    coinsTransactions?: CoinsTransactionCreateNestedManyWithoutRelatedBookingInput
  }

  export type BookingUncheckedCreateWithoutTrainingSessionInput = {
    id?: string
    userId: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coinsTransactions?: CoinsTransactionUncheckedCreateNestedManyWithoutRelatedBookingInput
  }

  export type BookingCreateOrConnectWithoutTrainingSessionInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTrainingSessionInput, BookingUncheckedCreateWithoutTrainingSessionInput>
  }

  export type BookingCreateManyTrainingSessionInputEnvelope = {
    data: BookingCreateManyTrainingSessionInput | BookingCreateManyTrainingSessionInput[]
    skipDuplicates?: boolean
  }

  export type TrainerUpsertWithoutTrainingSessionsInput = {
    update: XOR<TrainerUpdateWithoutTrainingSessionsInput, TrainerUncheckedUpdateWithoutTrainingSessionsInput>
    create: XOR<TrainerCreateWithoutTrainingSessionsInput, TrainerUncheckedCreateWithoutTrainingSessionsInput>
    where?: TrainerWhereInput
  }

  export type TrainerUpdateToOneWithWhereWithoutTrainingSessionsInput = {
    where?: TrainerWhereInput
    data: XOR<TrainerUpdateWithoutTrainingSessionsInput, TrainerUncheckedUpdateWithoutTrainingSessionsInput>
  }

  export type TrainerUpdateWithoutTrainingSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    specialization?: TrainerUpdatespecializationInput | $Enums.TrainingType[]
    user?: BaseUserUpdateOneRequiredWithoutTrainerNestedInput
  }

  export type TrainerUncheckedUpdateWithoutTrainingSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    specialization?: TrainerUpdatespecializationInput | $Enums.TrainingType[]
  }

  export type BookingUpsertWithWhereUniqueWithoutTrainingSessionInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTrainingSessionInput, BookingUncheckedUpdateWithoutTrainingSessionInput>
    create: XOR<BookingCreateWithoutTrainingSessionInput, BookingUncheckedCreateWithoutTrainingSessionInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTrainingSessionInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTrainingSessionInput, BookingUncheckedUpdateWithoutTrainingSessionInput>
  }

  export type BookingUpdateManyWithWhereWithoutTrainingSessionInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTrainingSessionInput>
  }

  export type CustomerCreateWithoutBookingsInput = {
    id?: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
    user: BaseUserCreateNestedOneWithoutCustomerInput
    coinsTransactions?: CoinsTransactionCreateNestedManyWithoutCustomerInput
    coinsPurchases?: CoinsPurchaseCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
    coinsTransactions?: CoinsTransactionUncheckedCreateNestedManyWithoutCustomerInput
    coinsPurchases?: CoinsPurchaseUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutBookingsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
  }

  export type TrainingSessionCreateWithoutBookingsInput = {
    id?: string
    trainingType: $Enums.TrainingType
    date: Date | string
    startTime: $Enums.TrainingTimeSlot
    durationMinutes?: number
    maxParticipants?: number
    coinsRequired?: number
    status?: $Enums.TrainingStatus
    qrCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trainer: TrainerCreateNestedOneWithoutTrainingSessionsInput
  }

  export type TrainingSessionUncheckedCreateWithoutBookingsInput = {
    id?: string
    trainerId: string
    trainingType: $Enums.TrainingType
    date: Date | string
    startTime: $Enums.TrainingTimeSlot
    durationMinutes?: number
    maxParticipants?: number
    coinsRequired?: number
    status?: $Enums.TrainingStatus
    qrCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingSessionCreateOrConnectWithoutBookingsInput = {
    where: TrainingSessionWhereUniqueInput
    create: XOR<TrainingSessionCreateWithoutBookingsInput, TrainingSessionUncheckedCreateWithoutBookingsInput>
  }

  export type CoinsTransactionCreateWithoutRelatedBookingInput = {
    id?: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCoinsTransactionsInput
    coinsPurchase?: CoinsPurchaseCreateNestedOneWithoutCoinsTransactionInput
  }

  export type CoinsTransactionUncheckedCreateWithoutRelatedBookingInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    orderId?: string | null
    createdAt?: Date | string
  }

  export type CoinsTransactionCreateOrConnectWithoutRelatedBookingInput = {
    where: CoinsTransactionWhereUniqueInput
    create: XOR<CoinsTransactionCreateWithoutRelatedBookingInput, CoinsTransactionUncheckedCreateWithoutRelatedBookingInput>
  }

  export type CoinsTransactionCreateManyRelatedBookingInputEnvelope = {
    data: CoinsTransactionCreateManyRelatedBookingInput | CoinsTransactionCreateManyRelatedBookingInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutBookingsInput = {
    update: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomerUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    user?: BaseUserUpdateOneRequiredWithoutCustomerNestedInput
    coinsTransactions?: CoinsTransactionUpdateManyWithoutCustomerNestedInput
    coinsPurchases?: CoinsPurchaseUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    coinsTransactions?: CoinsTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    coinsPurchases?: CoinsPurchaseUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TrainingSessionUpsertWithoutBookingsInput = {
    update: XOR<TrainingSessionUpdateWithoutBookingsInput, TrainingSessionUncheckedUpdateWithoutBookingsInput>
    create: XOR<TrainingSessionCreateWithoutBookingsInput, TrainingSessionUncheckedCreateWithoutBookingsInput>
    where?: TrainingSessionWhereInput
  }

  export type TrainingSessionUpdateToOneWithWhereWithoutBookingsInput = {
    where?: TrainingSessionWhereInput
    data: XOR<TrainingSessionUpdateWithoutBookingsInput, TrainingSessionUncheckedUpdateWithoutBookingsInput>
  }

  export type TrainingSessionUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: EnumTrainingTimeSlotFieldUpdateOperationsInput | $Enums.TrainingTimeSlot
    durationMinutes?: IntFieldUpdateOperationsInput | number
    maxParticipants?: IntFieldUpdateOperationsInput | number
    coinsRequired?: IntFieldUpdateOperationsInput | number
    status?: EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainer?: TrainerUpdateOneRequiredWithoutTrainingSessionsNestedInput
  }

  export type TrainingSessionUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainerId?: StringFieldUpdateOperationsInput | string
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: EnumTrainingTimeSlotFieldUpdateOperationsInput | $Enums.TrainingTimeSlot
    durationMinutes?: IntFieldUpdateOperationsInput | number
    maxParticipants?: IntFieldUpdateOperationsInput | number
    coinsRequired?: IntFieldUpdateOperationsInput | number
    status?: EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsTransactionUpsertWithWhereUniqueWithoutRelatedBookingInput = {
    where: CoinsTransactionWhereUniqueInput
    update: XOR<CoinsTransactionUpdateWithoutRelatedBookingInput, CoinsTransactionUncheckedUpdateWithoutRelatedBookingInput>
    create: XOR<CoinsTransactionCreateWithoutRelatedBookingInput, CoinsTransactionUncheckedCreateWithoutRelatedBookingInput>
  }

  export type CoinsTransactionUpdateWithWhereUniqueWithoutRelatedBookingInput = {
    where: CoinsTransactionWhereUniqueInput
    data: XOR<CoinsTransactionUpdateWithoutRelatedBookingInput, CoinsTransactionUncheckedUpdateWithoutRelatedBookingInput>
  }

  export type CoinsTransactionUpdateManyWithWhereWithoutRelatedBookingInput = {
    where: CoinsTransactionScalarWhereInput
    data: XOR<CoinsTransactionUpdateManyMutationInput, CoinsTransactionUncheckedUpdateManyWithoutRelatedBookingInput>
  }

  export type CustomerCreateWithoutCoinsTransactionsInput = {
    id?: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
    user: BaseUserCreateNestedOneWithoutCustomerInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
    coinsPurchases?: CoinsPurchaseCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCoinsTransactionsInput = {
    id?: string
    userId: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
    coinsPurchases?: CoinsPurchaseUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCoinsTransactionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCoinsTransactionsInput, CustomerUncheckedCreateWithoutCoinsTransactionsInput>
  }

  export type BookingCreateWithoutCoinsTransactionsInput = {
    id?: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutBookingsInput
    trainingSession: TrainingSessionCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutCoinsTransactionsInput = {
    id?: string
    userId: string
    trainingSessionId: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutCoinsTransactionsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCoinsTransactionsInput, BookingUncheckedCreateWithoutCoinsTransactionsInput>
  }

  export type CoinsPurchaseCreateWithoutCoinsTransactionInput = {
    id?: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    customer: CustomerCreateNestedOneWithoutCoinsPurchasesInput
    coinsPackage: CoinsPackageCreateNestedOneWithoutCoinsPurchasesInput
  }

  export type CoinsPurchaseUncheckedCreateWithoutCoinsTransactionInput = {
    id?: string
    userId: string
    coinsPackageId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CoinsPurchaseCreateOrConnectWithoutCoinsTransactionInput = {
    where: CoinsPurchaseWhereUniqueInput
    create: XOR<CoinsPurchaseCreateWithoutCoinsTransactionInput, CoinsPurchaseUncheckedCreateWithoutCoinsTransactionInput>
  }

  export type CustomerUpsertWithoutCoinsTransactionsInput = {
    update: XOR<CustomerUpdateWithoutCoinsTransactionsInput, CustomerUncheckedUpdateWithoutCoinsTransactionsInput>
    create: XOR<CustomerCreateWithoutCoinsTransactionsInput, CustomerUncheckedCreateWithoutCoinsTransactionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCoinsTransactionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCoinsTransactionsInput, CustomerUncheckedUpdateWithoutCoinsTransactionsInput>
  }

  export type CustomerUpdateWithoutCoinsTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    user?: BaseUserUpdateOneRequiredWithoutCustomerNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
    coinsPurchases?: CoinsPurchaseUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCoinsTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
    coinsPurchases?: CoinsPurchaseUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BookingUpsertWithoutCoinsTransactionsInput = {
    update: XOR<BookingUpdateWithoutCoinsTransactionsInput, BookingUncheckedUpdateWithoutCoinsTransactionsInput>
    create: XOR<BookingCreateWithoutCoinsTransactionsInput, BookingUncheckedCreateWithoutCoinsTransactionsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutCoinsTransactionsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutCoinsTransactionsInput, BookingUncheckedUpdateWithoutCoinsTransactionsInput>
  }

  export type BookingUpdateWithoutCoinsTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    trainingSession?: TrainingSessionUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutCoinsTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trainingSessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsPurchaseUpsertWithoutCoinsTransactionInput = {
    update: XOR<CoinsPurchaseUpdateWithoutCoinsTransactionInput, CoinsPurchaseUncheckedUpdateWithoutCoinsTransactionInput>
    create: XOR<CoinsPurchaseCreateWithoutCoinsTransactionInput, CoinsPurchaseUncheckedCreateWithoutCoinsTransactionInput>
    where?: CoinsPurchaseWhereInput
  }

  export type CoinsPurchaseUpdateToOneWithWhereWithoutCoinsTransactionInput = {
    where?: CoinsPurchaseWhereInput
    data: XOR<CoinsPurchaseUpdateWithoutCoinsTransactionInput, CoinsPurchaseUncheckedUpdateWithoutCoinsTransactionInput>
  }

  export type CoinsPurchaseUpdateWithoutCoinsTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutCoinsPurchasesNestedInput
    coinsPackage?: CoinsPackageUpdateOneRequiredWithoutCoinsPurchasesNestedInput
  }

  export type CoinsPurchaseUncheckedUpdateWithoutCoinsTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coinsPackageId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerCreateWithoutCoinsPurchasesInput = {
    id?: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
    user: BaseUserCreateNestedOneWithoutCustomerInput
    coinsTransactions?: CoinsTransactionCreateNestedManyWithoutCustomerInput
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCoinsPurchasesInput = {
    id?: string
    userId: string
    coins?: number
    preferredTrainingTypes?: CustomerCreatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: string | null
    coinsTransactions?: CoinsTransactionUncheckedCreateNestedManyWithoutCustomerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCoinsPurchasesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCoinsPurchasesInput, CustomerUncheckedCreateWithoutCoinsPurchasesInput>
  }

  export type CoinsPackageCreateWithoutCoinsPurchasesInput = {
    id?: string
    name: string
    coins: number
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoinsPackageUncheckedCreateWithoutCoinsPurchasesInput = {
    id?: string
    name: string
    coins: number
    price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    stripePriceId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoinsPackageCreateOrConnectWithoutCoinsPurchasesInput = {
    where: CoinsPackageWhereUniqueInput
    create: XOR<CoinsPackageCreateWithoutCoinsPurchasesInput, CoinsPackageUncheckedCreateWithoutCoinsPurchasesInput>
  }

  export type CoinsTransactionCreateWithoutCoinsPurchaseInput = {
    id?: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCoinsTransactionsInput
    relatedBooking?: BookingCreateNestedOneWithoutCoinsTransactionsInput
  }

  export type CoinsTransactionUncheckedCreateWithoutCoinsPurchaseInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    relatedBookingId?: string | null
    createdAt?: Date | string
  }

  export type CoinsTransactionCreateOrConnectWithoutCoinsPurchaseInput = {
    where: CoinsTransactionWhereUniqueInput
    create: XOR<CoinsTransactionCreateWithoutCoinsPurchaseInput, CoinsTransactionUncheckedCreateWithoutCoinsPurchaseInput>
  }

  export type CustomerUpsertWithoutCoinsPurchasesInput = {
    update: XOR<CustomerUpdateWithoutCoinsPurchasesInput, CustomerUncheckedUpdateWithoutCoinsPurchasesInput>
    create: XOR<CustomerCreateWithoutCoinsPurchasesInput, CustomerUncheckedCreateWithoutCoinsPurchasesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCoinsPurchasesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCoinsPurchasesInput, CustomerUncheckedUpdateWithoutCoinsPurchasesInput>
  }

  export type CustomerUpdateWithoutCoinsPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    user?: BaseUserUpdateOneRequiredWithoutCustomerNestedInput
    coinsTransactions?: CoinsTransactionUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCoinsPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    preferredTrainingTypes?: CustomerUpdatepreferredTrainingTypesInput | $Enums.TrainingType[]
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    coinsTransactions?: CoinsTransactionUncheckedUpdateManyWithoutCustomerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CoinsPackageUpsertWithoutCoinsPurchasesInput = {
    update: XOR<CoinsPackageUpdateWithoutCoinsPurchasesInput, CoinsPackageUncheckedUpdateWithoutCoinsPurchasesInput>
    create: XOR<CoinsPackageCreateWithoutCoinsPurchasesInput, CoinsPackageUncheckedCreateWithoutCoinsPurchasesInput>
    where?: CoinsPackageWhereInput
  }

  export type CoinsPackageUpdateToOneWithWhereWithoutCoinsPurchasesInput = {
    where?: CoinsPackageWhereInput
    data: XOR<CoinsPackageUpdateWithoutCoinsPurchasesInput, CoinsPackageUncheckedUpdateWithoutCoinsPurchasesInput>
  }

  export type CoinsPackageUpdateWithoutCoinsPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsPackageUncheckedUpdateWithoutCoinsPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsTransactionUpsertWithoutCoinsPurchaseInput = {
    update: XOR<CoinsTransactionUpdateWithoutCoinsPurchaseInput, CoinsTransactionUncheckedUpdateWithoutCoinsPurchaseInput>
    create: XOR<CoinsTransactionCreateWithoutCoinsPurchaseInput, CoinsTransactionUncheckedCreateWithoutCoinsPurchaseInput>
    where?: CoinsTransactionWhereInput
  }

  export type CoinsTransactionUpdateToOneWithWhereWithoutCoinsPurchaseInput = {
    where?: CoinsTransactionWhereInput
    data: XOR<CoinsTransactionUpdateWithoutCoinsPurchaseInput, CoinsTransactionUncheckedUpdateWithoutCoinsPurchaseInput>
  }

  export type CoinsTransactionUpdateWithoutCoinsPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCoinsTransactionsNestedInput
    relatedBooking?: BookingUpdateOneWithoutCoinsTransactionsNestedInput
  }

  export type CoinsTransactionUncheckedUpdateWithoutCoinsPurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsPurchaseCreateWithoutCoinsPackageInput = {
    id?: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    customer: CustomerCreateNestedOneWithoutCoinsPurchasesInput
    coinsTransaction?: CoinsTransactionCreateNestedOneWithoutCoinsPurchaseInput
  }

  export type CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput = {
    id?: string
    userId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    coinsTransaction?: CoinsTransactionUncheckedCreateNestedOneWithoutCoinsPurchaseInput
  }

  export type CoinsPurchaseCreateOrConnectWithoutCoinsPackageInput = {
    where: CoinsPurchaseWhereUniqueInput
    create: XOR<CoinsPurchaseCreateWithoutCoinsPackageInput, CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput>
  }

  export type CoinsPurchaseCreateManyCoinsPackageInputEnvelope = {
    data: CoinsPurchaseCreateManyCoinsPackageInput | CoinsPurchaseCreateManyCoinsPackageInput[]
    skipDuplicates?: boolean
  }

  export type CoinsPurchaseUpsertWithWhereUniqueWithoutCoinsPackageInput = {
    where: CoinsPurchaseWhereUniqueInput
    update: XOR<CoinsPurchaseUpdateWithoutCoinsPackageInput, CoinsPurchaseUncheckedUpdateWithoutCoinsPackageInput>
    create: XOR<CoinsPurchaseCreateWithoutCoinsPackageInput, CoinsPurchaseUncheckedCreateWithoutCoinsPackageInput>
  }

  export type CoinsPurchaseUpdateWithWhereUniqueWithoutCoinsPackageInput = {
    where: CoinsPurchaseWhereUniqueInput
    data: XOR<CoinsPurchaseUpdateWithoutCoinsPackageInput, CoinsPurchaseUncheckedUpdateWithoutCoinsPackageInput>
  }

  export type CoinsPurchaseUpdateManyWithWhereWithoutCoinsPackageInput = {
    where: CoinsPurchaseScalarWhereInput
    data: XOR<CoinsPurchaseUpdateManyMutationInput, CoinsPurchaseUncheckedUpdateManyWithoutCoinsPackageInput>
  }

  export type UserConsentCreateManyUserInput = {
    id?: string
    consentType: $Enums.ConsentType
    granted: boolean
    grantedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type UserConsentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    granted?: BoolFieldUpdateOperationsInput | boolean
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserConsentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    granted?: BoolFieldUpdateOperationsInput | boolean
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserConsentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    granted?: BoolFieldUpdateOperationsInput | boolean
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoinsTransactionCreateManyCustomerInput = {
    id?: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    relatedBookingId?: string | null
    orderId?: string | null
    createdAt?: Date | string
  }

  export type BookingCreateManyCustomerInput = {
    id?: string
    trainingSessionId: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoinsPurchaseCreateManyCustomerInput = {
    id?: string
    coinsPackageId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CoinsTransactionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedBooking?: BookingUpdateOneWithoutCoinsTransactionsNestedInput
    coinsPurchase?: CoinsPurchaseUpdateOneWithoutCoinsTransactionNestedInput
  }

  export type CoinsTransactionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsTransactionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingSession?: TrainingSessionUpdateOneRequiredWithoutBookingsNestedInput
    coinsTransactions?: CoinsTransactionUpdateManyWithoutRelatedBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingSessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinsTransactions?: CoinsTransactionUncheckedUpdateManyWithoutRelatedBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingSessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsPurchaseUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coinsPackage?: CoinsPackageUpdateOneRequiredWithoutCoinsPurchasesNestedInput
    coinsTransaction?: CoinsTransactionUpdateOneWithoutCoinsPurchaseNestedInput
  }

  export type CoinsPurchaseUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinsPackageId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coinsTransaction?: CoinsTransactionUncheckedUpdateOneWithoutCoinsPurchaseNestedInput
  }

  export type CoinsPurchaseUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    coinsPackageId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrainingSessionCreateManyTrainerInput = {
    id?: string
    trainingType: $Enums.TrainingType
    date: Date | string
    startTime: $Enums.TrainingTimeSlot
    durationMinutes?: number
    maxParticipants?: number
    coinsRequired?: number
    status?: $Enums.TrainingStatus
    qrCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainingSessionUpdateWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: EnumTrainingTimeSlotFieldUpdateOperationsInput | $Enums.TrainingTimeSlot
    durationMinutes?: IntFieldUpdateOperationsInput | number
    maxParticipants?: IntFieldUpdateOperationsInput | number
    coinsRequired?: IntFieldUpdateOperationsInput | number
    status?: EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutTrainingSessionNestedInput
  }

  export type TrainingSessionUncheckedUpdateWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: EnumTrainingTimeSlotFieldUpdateOperationsInput | $Enums.TrainingTimeSlot
    durationMinutes?: IntFieldUpdateOperationsInput | number
    maxParticipants?: IntFieldUpdateOperationsInput | number
    coinsRequired?: IntFieldUpdateOperationsInput | number
    status?: EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutTrainingSessionNestedInput
  }

  export type TrainingSessionUncheckedUpdateManyWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    trainingType?: EnumTrainingTypeFieldUpdateOperationsInput | $Enums.TrainingType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: EnumTrainingTimeSlotFieldUpdateOperationsInput | $Enums.TrainingTimeSlot
    durationMinutes?: IntFieldUpdateOperationsInput | number
    maxParticipants?: IntFieldUpdateOperationsInput | number
    coinsRequired?: IntFieldUpdateOperationsInput | number
    status?: EnumTrainingStatusFieldUpdateOperationsInput | $Enums.TrainingStatus
    qrCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyTrainingSessionInput = {
    id?: string
    userId: string
    status?: $Enums.BookingStatus
    coinsUsed?: number
    bookedAt?: Date | string
    cancelledAt?: Date | string | null
    attendedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutTrainingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    coinsTransactions?: CoinsTransactionUpdateManyWithoutRelatedBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutTrainingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinsTransactions?: CoinsTransactionUncheckedUpdateManyWithoutRelatedBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutTrainingSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    coinsUsed?: IntFieldUpdateOperationsInput | number
    bookedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsTransactionCreateManyRelatedBookingInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.CoinsTransactionType
    description: string
    balanceAfter: number
    orderId?: string | null
    createdAt?: Date | string
  }

  export type CoinsTransactionUpdateWithoutRelatedBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCoinsTransactionsNestedInput
    coinsPurchase?: CoinsPurchaseUpdateOneWithoutCoinsTransactionNestedInput
  }

  export type CoinsTransactionUncheckedUpdateWithoutRelatedBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsTransactionUncheckedUpdateManyWithoutRelatedBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCoinsTransactionTypeFieldUpdateOperationsInput | $Enums.CoinsTransactionType
    description?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinsPurchaseCreateManyCoinsPackageInput = {
    id?: string
    userId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentMethod?: string | null
    paymentIntentId?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CoinsPurchaseUpdateWithoutCoinsPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneRequiredWithoutCoinsPurchasesNestedInput
    coinsTransaction?: CoinsTransactionUpdateOneWithoutCoinsPurchaseNestedInput
  }

  export type CoinsPurchaseUncheckedUpdateWithoutCoinsPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coinsTransaction?: CoinsTransactionUncheckedUpdateOneWithoutCoinsPurchaseNestedInput
  }

  export type CoinsPurchaseUncheckedUpdateManyWithoutCoinsPackageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}