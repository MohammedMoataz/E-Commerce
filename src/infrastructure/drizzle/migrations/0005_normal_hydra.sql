CREATE TABLE "cart_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"_id" serial NOT NULL,
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
	"_id" serial NOT NULL,
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
ALTER TABLE "orders" RENAME COLUMN "shipping_price" TO "delivery_price";--> statement-breakpoint
ALTER TABLE "orders" RENAME COLUMN "total_order_price" TO "total_price";--> statement-breakpoint
ALTER TABLE "reviews" RENAME COLUMN "review" TO "rate";--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "status" varchar DEFAULT 'pending';--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "isPaid" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN "tax_price";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "sold";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "hexa_color";