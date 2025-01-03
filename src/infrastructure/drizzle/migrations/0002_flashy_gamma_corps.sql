ALTER TABLE "users" ALTER COLUMN "user_role" SET DEFAULT 'user';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'inactive';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_by" SET DEFAULT 'admin';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_by" SET DEFAULT 'admin';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "deleted_by" SET DEFAULT 'admin';