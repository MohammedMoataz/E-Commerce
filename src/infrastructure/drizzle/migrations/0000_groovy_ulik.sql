CREATE TABLE "audit" (
	"id" serial PRIMARY KEY NOT NULL,
	"action" varchar(50),
	"audit_data" jsonb,
	"audit_by" uuid,
	"audit_on" timestamp,
	"audit_status" varchar(10),
	"audit_error" jsonb
);
--> statement-breakpoint
CREATE TABLE "cart_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"quantity" integer DEFAULT 0,
	"discount" numeric DEFAULT '0.0',
	"created_at" timestamp DEFAULT now(),
	"created_by" uuid DEFAULT null,
	"updated_at" timestamp DEFAULT null,
	"updated_by" uuid DEFAULT null,
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" uuid DEFAULT null,
	CONSTRAINT "cart_items_quantity_constraints" CHECK ("cart_items"."quantity" >= 0),
	CONSTRAINT "cart_items_discount_constraints" CHECK ("cart_items"."discount" >= 0)
);
--> statement-breakpoint
CREATE TABLE "cart" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"total_amount" numeric DEFAULT '0.0',
	"total_discount" numeric DEFAULT '0.0',
	"created_at" timestamp DEFAULT now(),
	"created_by" uuid DEFAULT null,
	"updated_at" timestamp DEFAULT null,
	"updated_by" uuid DEFAULT null,
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" uuid DEFAULT null,
	CONSTRAINT "cart_total_amount_constraints" CHECK ("cart"."total_amount" >= 0),
	CONSTRAINT "cart_total_discount_constraints" CHECK ("cart"."total_discount" >= 0)
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(250) NOT NULL,
	"image" text DEFAULT null,
	"created_at" timestamp DEFAULT now(),
	"created_by" uuid DEFAULT null,
	"updated_at" timestamp DEFAULT null,
	"updated_by" uuid DEFAULT null,
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" uuid DEFAULT null,
	CONSTRAINT "categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"payment_method_type" varchar DEFAULT 'cash',
	"status" varchar DEFAULT 'pending',
	"shipping_at" timestamp,
	"shipping_address" varchar(250),
	"shipping_price" numeric DEFAULT '0.0',
	"total_price" numeric DEFAULT '0.0',
	"is_paid" boolean DEFAULT false,
	"paid_at" timestamp DEFAULT null,
	"created_at" timestamp DEFAULT now(),
	"created_by" uuid DEFAULT null,
	"updated_at" timestamp DEFAULT null,
	"updated_by" uuid DEFAULT null,
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" uuid DEFAULT null,
	CONSTRAINT "orders_shipping_price_constraints" CHECK ("orders"."shipping_price" >= 0),
	CONSTRAINT "orders_total_price_constraints" CHECK ("orders"."total_price" >= 0)
);
--> statement-breakpoint
CREATE TABLE "products_images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now(),
	"created_by" uuid DEFAULT null,
	"updated_at" timestamp DEFAULT null,
	"updated_by" uuid DEFAULT null,
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" uuid DEFAULT null
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(50) NOT NULL,
	"description" text DEFAULT null,
	"quantity" integer DEFAULT 0,
	"cover_image" text DEFAULT null,
	"price" numeric DEFAULT '0.0',
	"discount" numeric DEFAULT '0.0',
	"rating_average" numeric DEFAULT '0.0',
	"rating_quantity" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"created_by" uuid DEFAULT null,
	"updated_at" timestamp DEFAULT null,
	"updated_by" uuid DEFAULT null,
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" uuid DEFAULT null,
	CONSTRAINT "products_quantity_constraints" CHECK ("products"."quantity" >= 0),
	CONSTRAINT "products_price_constraints" CHECK ("products"."price" >= 0),
	CONSTRAINT "products_discount_constraints" CHECK ("products"."discount" >= 0),
	CONSTRAINT "products_rating_average_constraints" CHECK ("products"."rating_average" BETWEEN 0 AND 5),
	CONSTRAINT "products_rating_quantity_constraints" CHECK ("products"."rating_quantity" >=0)
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content" text DEFAULT null,
	"rate" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"created_by" uuid DEFAULT null,
	"updated_at" timestamp DEFAULT null,
	"updated_by" uuid DEFAULT null,
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" uuid DEFAULT null,
	CONSTRAINT "reviews_rate_constraints" CHECK ("reviews"."rate" BETWEEN 1 AND 5)
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(50) NOT NULL,
	"last_name" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
	"username" varchar(255) NOT NULL,
	"password_hash" text NOT NULL,
	"role" varchar DEFAULT 'user',
	"avatar" text DEFAULT null,
	"age" integer,
	"phone_number" varchar(11),
	"address" varchar(255) DEFAULT 'Egypt',
	"is_active" boolean DEFAULT false,
	"gender" varchar,
	"created_at" timestamp DEFAULT now(),
	"created_by" uuid DEFAULT null,
	"updated_at" timestamp DEFAULT null,
	"updated_by" uuid DEFAULT null,
	"deleted_at" timestamp DEFAULT null,
	"deleted_by" uuid DEFAULT null,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_age_constraints" CHECK ("users"."age" >= 18),
	CONSTRAINT "users_phone_number_constraints" CHECK ("users"."phone_number" ~ '^(01)[0-9]{9}$')
);
--> statement-breakpoint
CREATE INDEX "audit_on_idx" ON "audit" USING btree ("audit_on");--> statement-breakpoint
CREATE INDEX "audit_by_idx" ON "audit" USING btree ("audit_by");--> statement-breakpoint
CREATE INDEX "categories_name_idx" ON "categories" USING btree ("name");--> statement-breakpoint
CREATE INDEX "orders_payment_method_type" ON "orders" USING btree ("payment_method_type");--> statement-breakpoint
CREATE INDEX "orders_status" ON "orders" USING btree ("status");--> statement-breakpoint
CREATE INDEX "products_title_idx" ON "products" USING btree ("title");--> statement-breakpoint
CREATE INDEX "users_email_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "users_username_idx" ON "users" USING btree ("username");--> statement-breakpoint
CREATE INDEX "users_user_role_idx" ON "users" USING btree ("role");--> statement-breakpoint
CREATE INDEX "users_is_active_idx" ON "users" USING btree ("is_active");