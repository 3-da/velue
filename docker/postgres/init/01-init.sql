-- Initialize database for Velue project
-- This script runs when the PostgreSQL container starts for the first time

-- Create additional schemas if needed
-- CREATE SCHEMA IF NOT EXISTS app_schema;

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Grant privileges to the velue_user
GRANT ALL PRIVILEGES ON DATABASE velue_db TO velue_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO velue_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO velue_user;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO velue_user;

-- Set default privileges for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO velue_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO velue_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO velue_user;