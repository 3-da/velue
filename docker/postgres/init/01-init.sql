-- Initialize database for Velocity project
-- This script runs when the PostgreSQL container starts for the first time

-- Create additional schemas if needed
-- CREATE SCHEMA IF NOT EXISTS app_schema;

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Grant privileges to the velocity_user
GRANT ALL PRIVILEGES ON DATABASE velocity_db TO velocity_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO velocity_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO velocity_user;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO velocity_user;

-- Set default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO velocity_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO velocity_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO velocity_user;