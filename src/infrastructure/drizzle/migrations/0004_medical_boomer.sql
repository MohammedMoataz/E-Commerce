ALTER TABLE "reviews" RENAME COLUMN "user_id" TO "client_id";--> statement-breakpoint
ALTER TABLE "reviews" RENAME COLUMN "rate" TO "rating";--> statement-breakpoint
ALTER TABLE "cart_items" DROP CONSTRAINT "cart_items_quantity_constraints";--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_rate_constraints";--> statement-breakpoint
ALTER TABLE "orders" DROP CONSTRAINT "order_created_by_id_fk";
--> statement-breakpoint
ALTER TABLE "orders" DROP CONSTRAINT "order_updated_by_id_fk";
--> statement-breakpoint
ALTER TABLE "orders" DROP CONSTRAINT "order_deleted_by_id_fk";
--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "product_created_by_id_fk";
--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "product_updated_by_id_fk";
--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "product_deleted_by_id_fk";
--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "review_user_id_fk";
--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "review_product_id_fk";
--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "review_created_by_id_fk";
--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "review_updated_by_id_fk";
--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "review_deleted_by_id_fk";
--> statement-breakpoint
DROP INDEX "users_user_role_idx";--> statement-breakpoint
ALTER TABLE "audit" ALTER COLUMN "action" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "audit" ALTER COLUMN "audit_data" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "audit" ALTER COLUMN "audit_by" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "audit" ALTER COLUMN "audit_on" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "audit" ALTER COLUMN "audit_on" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "audit" ALTER COLUMN "audit_status" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "audit" ALTER COLUMN "audit_error" SET DEFAULT 'null'::jsonb;--> statement-breakpoint
ALTER TABLE "cart_items" ALTER COLUMN "quantity" SET DEFAULT 1;--> statement-breakpoint
ALTER TABLE "cart_items" ALTER COLUMN "quantity" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "cart_items" ALTER COLUMN "discount" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "cart_items" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "cart" ALTER COLUMN "total_amount" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "cart" ALTER COLUMN "total_discount" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "cart" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "categories" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "payment_method_type" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "status" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "shipping_at" SET DEFAULT null;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "shipping_address" SET DEFAULT null;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "shipping_price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "total_price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "is_paid" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products_images" ALTER COLUMN "image" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "title" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "description" SET DATA TYPE varchar(250);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "age" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "gender" SET DEFAULT null;--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "description" varchar(250) DEFAULT null;--> statement-breakpoint
ALTER TABLE "products_images" ADD COLUMN "alt_text" text DEFAULT null;--> statement-breakpoint
ALTER TABLE "products_images" ADD COLUMN "updated_at" timestamp DEFAULT null;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "users_role_idx" ON "users" USING btree ("role");--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN "created_by";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN "updated_by";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN "deleted_by";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "created_by";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "updated_by";--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "deleted_by";--> statement-breakpoint
ALTER TABLE "reviews" DROP COLUMN "created_by";--> statement-breakpoint
ALTER TABLE "reviews" DROP COLUMN "updated_by";--> statement-breakpoint
ALTER TABLE "reviews" DROP COLUMN "deleted_by";--> statement-breakpoint
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_quantity_constraints" CHECK ("cart_items"."quantity" > 0);--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_rating_constraints" CHECK ("reviews"."rating" BETWEEN 1 AND 5);