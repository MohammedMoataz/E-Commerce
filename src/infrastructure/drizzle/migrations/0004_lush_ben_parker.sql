CREATE TABLE "orders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"_id" serial NOT NULL,
	"tax_price" double precision DEFAULT 0,
	"shipping_price" double precision DEFAULT 0,
	"total_order_price" double precision DEFAULT 0,
	"payment_method_type" varchar DEFAULT 'cash',
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
CREATE TABLE "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"_id" serial NOT NULL,
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
CREATE TABLE "products_Images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"_id" serial NOT NULL,
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
	"_id" serial NOT NULL,
	"title" varchar(50),
	"description" varchar(250) DEFAULT null,
	"quantity" integer DEFAULT 0,
	"cover_image" varchar(250) DEFAULT null,
	"sold" boolean DEFAULT false,
	"price" double precision DEFAULT 0,
	"discount" double precision DEFAULT 0,
	"hexa_color" varchar(8) DEFAULT 'ffffffff',
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
	"_id" serial NOT NULL,
	"content" varchar DEFAULT null,
	"review" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"created_by" varchar DEFAULT 'admin',
	"updated_at" timestamp DEFAULT null,
	"updated_by" varchar DEFAULT 'admin',
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" varchar DEFAULT 'admin'
);
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "avatar" SET DEFAULT null;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "address" SET DEFAULT 'Egypt';