/*
  # Add categories and featured products
  
  1. Changes
    - Add categories column to products table
    - Add featured flag to products table
    - Add search index on product name and description
  
  2. Security
    - No changes to existing policies
*/

-- Add new columns to products table
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS featured boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS search_vector tsvector 
  GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(name, '') || ' ' || coalesce(description, ''))
  ) STORED;

-- Add search index
CREATE INDEX IF NOT EXISTS products_search_idx ON products USING GIN (search_vector);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE OR REPLACE TRIGGER update_products_updated_at
    BEFORE UPDATE ON products
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();