CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"_id" serial NOT NULL,
	"first_name" varchar(50) NOT NULL,
	"last_name" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password_hash" text NOT NULL,
	"user_role" varchar DEFAULT 'USER' NOT NULL,
	"avatar" text,
	"age" integer,
	"phone_number" varchar(11),
	"address" varchar(255),
	"status" varchar NOT NULL,
	"gender" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"created_by" varchar NOT NULL,
	"updated_at" timestamp,
	"updated_by" varchar,
	"deleted_at" timestamp,
	"deleted_by" varchar
);
--> statement-breakpoint
CREATE UNIQUE INDEX "emailIndex" ON "users" USING btree ("email");