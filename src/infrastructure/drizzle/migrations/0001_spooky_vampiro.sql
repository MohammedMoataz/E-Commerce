ALTER TABLE "cart_items" ADD COLUMN "product_id" uuid;--> statement-breakpoint
ALTER TABLE "cart_items" ADD COLUMN "cart_id" uuid;--> statement-breakpoint
ALTER TABLE "cart" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "products_images" ADD COLUMN "product_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "category_id" integer NOT NULL;