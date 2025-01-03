DROP INDEX "emailIndex";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "first_name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "last_name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password_hash" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "user_role" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "status" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "gender" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_by" DROP NOT NULL;