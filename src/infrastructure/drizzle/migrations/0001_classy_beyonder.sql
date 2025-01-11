ALTER TABLE "products" DROP CONSTRAINT "products_rating_quantity_constraints";--> statement-breakpoint
ALTER TABLE "reviews" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "reviews" ALTER COLUMN "product_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "reviews" ALTER COLUMN "rate" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "reviews" ALTER COLUMN "rate" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products_images" DROP COLUMN "updated_at";--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_rating_quantity_constraints" CHECK ("products"."rating_quantity" >= 0);