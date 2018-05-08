DROP TABLE product CASCADE;
DROP TABLE creator CASCADE;
DROP TABLE creator_product CASCADE;

CREATE TABLE product (
  product_id SERIAL PRIMARY KEY,
  product_name TEXT, 
  category TEXT, 
  num_backers INTEGER, 
  amt_pledged INTEGER,
  enddate TIMESTAMP, 
  amt_total INTEGER,
  title TEXT, 
  description TEXT, 
  product_img TEXT
);

CREATE TABLE creator (
  creator_id SERIAL PRIMARY KEY,
  creator_name TEXT, 
  location TEXT, 
  avatar_img TEXT, 
  amt_product INTEGER
);

CREATE TABLE creator_product (
  product_id INTEGER REFERENCES product(product_id),
  creator_id INTEGER REFERENCES creator(creator_id),
  PRIMARY KEY (product_id, creator_id)
);

