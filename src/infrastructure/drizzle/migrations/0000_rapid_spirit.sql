CREATE TABLE "audit" (
	"id" serial PRIMARY KEY NOT NULL,
	"action" varchar(50),
	"audit_data" jsonb,
	"audit_by" varchar(50),
	"audit_on" timestamp DEFAULT now(),
	"audit_status" varchar(50),
	"audit_error" jsonb
);
--> statement-breakpoint
CREATE TABLE "cart_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"quantity" double precision DEFAULT 0,
	"discount" double precision DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"created_by" varchar DEFAULT 'admin',
	"updated_at" timestamp DEFAULT null,
	"updated_by" varchar DEFAULT 'admin',
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" varchar DEFAULT 'admin'
);
--> statement-breakpoint
CREATE TABLE "cart" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"total_amount" double precision DEFAULT 0,
	"totaldiscount" double precision DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"created_by" varchar DEFAULT 'admin',
	"updated_at" timestamp DEFAULT null,
	"updated_by" varchar DEFAULT 'admin',
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" varchar DEFAULT 'admin'
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(250),
	"image" varchar(250) DEFAULT null,
	"created_at" timestamp DEFAULT now(),
	"created_by" varchar DEFAULT 'admin',
	"updated_at" timestamp DEFAULT null,
	"updated_by" varchar DEFAULT 'admin',
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" varchar DEFAULT 'admin'
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"delivery_price" double precision DEFAULT 0,
	"total_price" double precision DEFAULT 0,
	"payment_method_type" varchar DEFAULT 'cash',
	"status" varchar DEFAULT 'pending',
	"isPaid" boolean DEFAULT false,
	"paidAt" timestamp DEFAULT null,
	"deliverd_at" timestamp,
	"created_at" timestamp DEFAULT now(),
	"created_by" varchar DEFAULT 'admin',
	"updated_at" timestamp DEFAULT null,
	"updated_by" varchar DEFAULT 'admin',
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" varchar DEFAULT 'admin'
);
--> statement-breakpoint
CREATE TABLE "products_Images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image" varchar(250),
	"created_at" timestamp DEFAULT now(),
	"created_by" varchar DEFAULT 'admin',
	"updated_at" timestamp DEFAULT null,
	"updated_by" varchar DEFAULT 'admin',
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" varchar DEFAULT 'admin'
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(50),
	"description" varchar(250) DEFAULT null,
	"quantity" integer DEFAULT 0,
	"cover_image" varchar(250) DEFAULT null,
	"price" double precision DEFAULT 0,
	"discount" double precision DEFAULT 0,
	"rating_average" double precision DEFAULT 0,
	"rating_quantity" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"created_by" varchar DEFAULT 'admin',
	"updated_at" timestamp DEFAULT null,
	"updated_by" varchar DEFAULT 'admin',
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" varchar DEFAULT 'admin'
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content" varchar DEFAULT null,
	"rate" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"created_by" varchar DEFAULT 'admin',
	"updated_at" timestamp DEFAULT null,
	"updated_by" varchar DEFAULT 'admin',
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" varchar DEFAULT 'admin'
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"email" varchar(255),
	"username" varchar(255),
	"password_hash" text,
	"user_role" varchar DEFAULT 'user',
	"avatar" text DEFAULT null,
	"age" integer,
	"phone_number" varchar(11),
	"address" varchar(255) DEFAULT 'Egypt',
	"status" varchar DEFAULT 'inactive',
	"gender" varchar,
	"created_at" timestamp DEFAULT now(),
	"created_by" varchar DEFAULT 'admin',
	"updated_at" timestamp,
	"updated_by" varchar DEFAULT 'admin',
	"deleted_at" timestamp,
	"deleted_by" varchar DEFAULT 'admin'
);
