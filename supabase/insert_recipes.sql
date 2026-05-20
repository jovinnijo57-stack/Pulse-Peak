-- SQL Script to insert/sync all default recipes in Supabase recipes table
-- Run this script in the Supabase SQL Editor.

-- Optional: Clear existing default recipes to avoid duplicates if you are doing a clean sync
-- DELETE FROM public.recipes WHERE is_custom = FALSE OR user_id IS NULL;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Soft Steamed Idli',
  'Breakfast',
  '15 min',
  2,
  '120 kcal',
  '4g',
  '0.5g',
  '26g',
  'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-rice","name":"Idli Rice","qty":200,"unit":"g"},{"id":"i-urad","name":"Urad Dal","qty":50,"unit":"g"},{"id":"i-salt","name":"Salt","qty":5,"unit":"g"},{"id":"i-water","name":"Water","qty":150,"unit":"ml"}]'::jsonb,
  ARRAY['Soak rice and urad dal separately for 4-6 hours.', 'Grind urad dal to a fluffy batter and rice to a slightly coarse batter.', 'Mix both batters together, add salt, and ferment overnight (8-12 hours).', 'Pour batter into greased idli molds.', 'Steam for 10-12 minutes until clean when pricked with a toothpick.', 'Serve hot with coconut chutney and sambar.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000002',
  'Crispy Masala Dosa',
  'Breakfast',
  '25 min',
  2,
  '320 kcal',
  '7g',
  '10g',
  '54g',
  'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-dosa-batter","name":"Dosa Batter","qty":300,"unit":"ml"},{"id":"i-potatoes","name":"Boiled Potatoes","qty":200,"unit":"g"},{"id":"i-onion","name":"Onions","qty":50,"unit":"g"},{"id":"i-mustard","name":"Mustard Seeds","qty":2,"unit":"g"},{"id":"i-ghee","name":"Ghee / Oil","qty":15,"unit":"ml"}]'::jsonb,
  ARRAY['Prepare potato masala by sautéing onions, mustard seeds, and boiled mashed potatoes with turmeric.', 'Heat a non-stick tawa and spread a ladle of dosa batter in a circular motion.', 'Drizzle ghee around the edges and cook until crispy and golden brown.', 'Place potato masala in the center and fold the dosa.', 'Serve immediately with sambar and spicy chutneys.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000003',
  'Aromatic Chicken Biryani',
  'Indian Favorites',
  '45 min',
  3,
  '550 kcal',
  '32g',
  '18g',
  '62g',
  'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-basmati","name":"Basmati Rice","qty":250,"unit":"g"},{"id":"i-chicken","name":"Chicken Pieces","qty":300,"unit":"g"},{"id":"i-yogurt","name":"Yogurt","qty":100,"unit":"g"},{"id":"i-onion-fried","name":"Fried Onions","qty":50,"unit":"g"},{"id":"i-ghee","name":"Ghee","qty":20,"unit":"ml"},{"id":"i-spices","name":"Biryani Masala","qty":15,"unit":"g"}]'::jsonb,
  ARRAY['Marinate chicken with yogurt, biryani masala, salt, and ginger-garlic paste for 1 hour.', 'Wash and soak basmati rice for 30 minutes, then parboil with whole spices.', 'In a heavy-bottomed pot, layer the marinated chicken, cooked rice, fried onions, mint leaves, and ghee.', 'Cover tightly (Dum) and cook on low heat for 25-30 minutes.', 'Gently fluff the rice layers and serve hot with raita.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000004',
  'Classic Palak Paneer',
  'Indian Favorites',
  '30 min',
  2,
  '310 kcal',
  '16g',
  '22g',
  '12g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-spinach","name":"Fresh Spinach","qty":250,"unit":"g"},{"id":"i-paneer","name":"Paneer Cubes","qty":150,"unit":"g"},{"id":"i-tomato","name":"Tomato Puree","qty":80,"unit":"g"},{"id":"i-cream","name":"Fresh Cream","qty":15,"unit":"ml"},{"id":"i-garlic","name":"Garlic cloves","qty":10,"unit":"g"}]'::jsonb,
  ARRAY['Blanch spinach leaves in hot water for 2 minutes, then shock in cold water and puree.', 'Pan-fry paneer cubes until lightly golden, then soak in warm water to keep them soft.', 'Sauté chopped garlic, onions, and tomato puree until oil separates.', 'Add spinach puree, salt, and spices. Simmer for 5 minutes.', 'Gently stir in paneer cubes, add fresh cream, and serve warm with rotis.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000005',
  'Mediterranean Chickpea Salad',
  'Global Favorites',
  '15 min',
  2,
  '290 kcal',
  '12g',
  '6g',
  '45g',
  'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-chickpeas","name":"Boiled Chickpeas","qty":200,"unit":"g"},{"id":"i-cucumber","name":"Cucumber","qty":100,"unit":"g"},{"id":"i-cherry-tom","name":"Cherry Tomatoes","qty":80,"unit":"g"},{"id":"i-feta","name":"Feta Cheese","qty":30,"unit":"g"},{"id":"i-olive-oil","name":"Olive Oil","qty":10,"unit":"ml"}]'::jsonb,
  ARRAY['Rinse and drain boiled chickpeas and place in a large mixing bowl.', 'Dice cucumbers, halve cherry tomatoes, and crumble feta cheese.', 'Add vegetables and feta cheese to the bowl with chickpeas.', 'Drizzle olive oil, lemon juice, salt, pepper, and oregano.', 'Toss gently and serve chilled or at room temperature.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000006',
  'Creamy Mango Lassi',
  'Drinks',
  '5 min',
  1,
  '220 kcal',
  '8g',
  '4g',
  '38g',
  'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-mango","name":"Ripe Mango Pulp","qty":150,"unit":"g"},{"id":"i-yogurt-lassi","name":"Fresh Thick Yogurt","qty":200,"unit":"g"},{"id":"i-honey","name":"Honey or Sugar","qty":10,"unit":"g"},{"id":"i-cardamom","name":"Cardamom powder","qty":1,"unit":"g"},{"id":"i-ice","name":"Ice Cubes","qty":4,"unit":"pcs"}]'::jsonb,
  ARRAY['Combine ripe mango pulp, yogurt, honey, and cardamom powder in a blender.', 'Add ice cubes and blend until smooth and frothy.', 'Pour into glass and garnish with saffron strands or chopped nuts.', 'Serve chilled immediately.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000007',
  'Kadhi Pakora',
  'Indian Favorites',
  '35 min',
  2,
  '240 kcal',
  '8g',
  '11g',
  '28g',
  'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-besan","name":"Besan (Gram Flour)","qty":100,"unit":"g"},{"id":"i-sour-yogurt","name":"Sour Yogurt / Curd","qty":150,"unit":"g"},{"id":"i-onion","name":"Onion","qty":50,"unit":"g"},{"id":"i-oil","name":"Mustard Oil","qty":20,"unit":"ml"},{"id":"i-spices-kadhi","name":"Kadhi Spices","qty":10,"unit":"g"}]'::jsonb,
  ARRAY['Mix sour yogurt, besan, and water into a smooth, thin lump-free mixture.', 'Prepare pakoras by mixing besan, sliced onions, spices, and frying small dollops of batter.', 'Simmer the curd-besan mixture on medium heat with turmeric and salt until it thickens.', 'Add fried pakoras to the simmering kadhi and cook for 5-10 minutes.', 'Prepare a tempering with mustard oil, fenugreek seeds, dry red chilies, and hing, and pour over the Kadhi.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000008',
  'Soft Gulab Jamun',
  'Desserts',
  '25 min',
  4,
  '300 kcal',
  '4g',
  '11g',
  '48g',
  'https://images.unsplash.com/photo-1622207012971-820522f64609?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-khoya","name":"Khoya / Mawa","qty":150,"unit":"g"},{"id":"i-maida","name":"Maida (Flour)","qty":30,"unit":"g"},{"id":"i-sugar","name":"Sugar","qty":200,"unit":"g"},{"id":"i-rosewater","name":"Rose Water","qty":5,"unit":"ml"},{"id":"i-ghee-fry","name":"Ghee for frying","qty":100,"unit":"ml"}]'::jsonb,
  ARRAY['Prepare a sugar syrup by boiling sugar and water with cardamom until slightly sticky.', 'Knead khoya and maida together into a smooth, crack-free dough.', 'Shape the dough into small smooth rounds.', 'Fry the balls in low-medium heat ghee until deep golden brown.', 'Drain and soak immediately in the sugar syrup for 2 hours before serving.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000009',
  'Malabar Appam',
  'Breakfast',
  '15 min',
  2,
  '180 kcal',
  '3g',
  '4g',
  '34g',
  'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-raw-rice","name":"Raw Rice","qty":200,"unit":"g"},{"id":"i-coconut-grated","name":"Grate Coconut","qty":50,"unit":"g"},{"id":"i-cooked-rice","name":"Cooked Rice","qty":50,"unit":"g"},{"id":"i-yeast","name":"Yeast","qty":2,"unit":"g"},{"id":"i-sugar","name":"Sugar","qty":10,"unit":"g"},{"id":"i-salt","name":"Salt","qty":3,"unit":"g"}]'::jsonb,
  ARRAY['Soak 2 cups raw rice for 4 hours.', 'Grind rice with 1 cup grated coconut and 1/2 cup cooked rice.', 'Add 1/2 tsp yeast and 1 tbsp sugar.', 'Ferment for 6–8 hours until bubbly.', 'Pour into an Appam pan and swirl to coat edges.', 'Steam covered for 3 min.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000010',
  'Steamed Puttu',
  'Breakfast',
  '15 min',
  2,
  '290 kcal',
  '5g',
  '8g',
  '50g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-rice-flour","name":"Rice Flour","qty":150,"unit":"g"},{"id":"i-coconut-grated-p","name":"Grated Coconut","qty":40,"unit":"g"},{"id":"i-salt-p","name":"Salt","qty":2,"unit":"g"}]'::jsonb,
  ARRAY['Mix 2 cups rice flour with 1/2 tsp salt.', 'Sprinkle 3/4 cup water gradually while mixing until moist but crumbly.', 'Layer 2 tbsp coconut then 1 cup flour mixture in puttu maker.', 'Steam for 6–8 min until steam escapes top.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000011',
  'Savory Upma',
  'Breakfast',
  '15 min',
  2,
  '250 kcal',
  '5g',
  '7g',
  '42g',
  'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-rava","name":"Rava (Semolina)","qty":150,"unit":"g"},{"id":"i-mustard","name":"Mustard Seeds","qty":2,"unit":"g"},{"id":"i-onion-u","name":"Onion","qty":50,"unit":"g"},{"id":"i-chili-u","name":"Green Chilies","qty":5,"unit":"g"},{"id":"i-ghee-u","name":"Ghee","qty":15,"unit":"ml"}]'::jsonb,
  ARRAY['Roast 1 cup rava until fragrant; set aside.', 'Sauté 1 tsp mustard seeds, 1 chopped onion, and chilies in 2 tbsp ghee.', 'Add 2.5 cups water and bring to a boil.', 'Slowly pour in rava while stirring constantly.', 'Cover and cook on low heat for 5 min.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000012',
  'Ven Pongal',
  'Breakfast',
  '20 min',
  2,
  '380 kcal',
  '8g',
  '12g',
  '60g',
  'https://images.unsplash.com/photo-1626200419199-391ae4be7a40?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-rice-po","name":"Rice","qty":150,"unit":"g"},{"id":"i-dal-po","name":"Moong Dal","qty":75,"unit":"g"},{"id":"i-ghee-po","name":"Ghee","qty":20,"unit":"ml"},{"id":"i-spices-po","name":"Pepper & Cumin","qty":5,"unit":"g"},{"id":"i-ginger-po","name":"Ginger","qty":5,"unit":"g"}]'::jsonb,
  ARRAY['Pressure cook 1 cup rice and 1/2 cup moong dal with 4.5 cups water.', 'Mash the cooked mixture slightly.', 'Heat 3 tbsp ghee; fry 1 tsp pepper, 1 tsp cumin, and ginger.', 'Pour the tempering over the rice mixture.', 'Add 1 tsp salt and mix well.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000013',
  'Spicy Chana Masala',
  'Indian Favorites',
  '30 min',
  3,
  '280 kcal',
  '10g',
  '8g',
  '40g',
  'https://images.unsplash.com/photo-1585938338392-50a59970d2ee?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-chana","name":"Chickpeas","qty":200,"unit":"g"},{"id":"i-onion-ch","name":"Onion","qty":80,"unit":"g"},{"id":"i-tom-ch","name":"Tomatoes","qty":100,"unit":"g"},{"id":"i-powder-ch","name":"Chana Masala Powder","qty":10,"unit":"g"},{"id":"i-oil-ch","name":"Oil","qty":15,"unit":"ml"}]'::jsonb,
  ARRAY['Soak 1 cup chickpeas overnight and pressure cook until soft.', 'Sauté 1 large onion and 2 tomatoes into a soft paste.', 'Add 2 tsp chana masala powder and the cooked beans.', 'Simmer with 1/2 cup water for 10 min.', 'Mash a few chickpeas to thicken the gravy.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000014',
  'Punjabi Rajma Masala',
  'Indian Favorites',
  '35 min',
  3,
  '340 kcal',
  '14g',
  '9g',
  '52g',
  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-rajma","name":"Rajma (Red Kidney Beans)","qty":200,"unit":"g"},{"id":"i-onion-ra","name":"Onion","qty":80,"unit":"g"},{"id":"i-tom-ra","name":"Tomato Puree","qty":120,"unit":"g"},{"id":"i-ghee-ra","name":"Ghee","qty":20,"unit":"ml"},{"id":"i-gg-ra","name":"Ginger & Garlic Paste","qty":10,"unit":"g"}]'::jsonb,
  ARRAY['Soak 1 cup rajma for 8 hours and pressure cook well.', 'Sauté puree with ginger in 1 tbsp ghee until oil separates.', 'Add cooked beans and 1 tsp salt.', 'Simmer for 15 min on low heat until creamy.', 'Serve hot with steamed Basmati rice.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000015',
  'Coconut Veg Kurma',
  'Indian Favorites',
  '25 min',
  3,
  '240 kcal',
  '5g',
  '18g',
  '18g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-veg-ku","name":"Mixed Vegetables","qty":250,"unit":"g"},{"id":"i-coco-ku","name":"Coconut","qty":60,"unit":"g"},{"id":"i-cash-ku","name":"Cashews","qty":15,"unit":"g"},{"id":"i-oil-ku","name":"Oil","qty":15,"unit":"ml"}]'::jsonb,
  ARRAY['Grind 1/2 cup coconut and 5 cashews into a smooth paste.', 'Boil 2 cups mixed veggies (carrots, beans, peas).', 'Sauté spices and add the coconut paste + veggies.', 'Simmer for 5 min until the sauce thickens.', 'Add a splash of water for desired consistency.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000016',
  'Rich Mushroom Curry',
  'Indian Favorites',
  '20 min',
  2,
  '190 kcal',
  '6g',
  '14g',
  '12g',
  'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-mush-mu","name":"Mushrooms","qty":250,"unit":"g"},{"id":"i-onion-mu","name":"Onion","qty":60,"unit":"g"},{"id":"i-tom-mu","name":"Tomato Puree","qty":80,"unit":"g"},{"id":"i-cream-mu","name":"Heavy Cream","qty":30,"unit":"ml"},{"id":"i-oil-mu","name":"Oil","qty":15,"unit":"ml"}]'::jsonb,
  ARRAY['Sauté 250g sliced mushrooms until they release water.', 'Add 1 chopped onion and 1 tsp garlic paste.', 'Stir in 1/2 cup tomato puree and spices.', 'Cook for 8 min until mushrooms are tender.', 'Finish with 2 tbsp heavy cream for a rich texture.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000017',
  'Crispy Bhindi Fry',
  'Indian Favorites',
  '20 min',
  2,
  '150 kcal',
  '3g',
  '10g',
  '15g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-bhindi-bh","name":"Okra (Bhindi)","qty":250,"unit":"g"},{"id":"i-oil-bh","name":"Oil","qty":30,"unit":"ml"},{"id":"i-spices-bh","name":"Turmeric & Spices","qty":5,"unit":"g"},{"id":"i-amchur-bh","name":"Amchur Powder","qty":3,"unit":"g"}]'::jsonb,
  ARRAY['Wash and dry 250g okra completely; slice into rounds.', 'Heat 2 tbsp oil and sauté okra on medium-high.', 'Add 1/2 tsp turmeric and 1 tsp salt.', 'Fry for 10 min without a lid to avoid sliminess.', 'Toss with 1/2 tsp amchur powder for tanginess.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000018',
  'Vegetable Curry',
  'Lunch',
  '20 min',
  2,
  '220 kcal',
  '4g',
  '12g',
  '25g',
  'https://images.unsplash.com/photo-1618449840665-9ed506d73a34?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-mixed-vegetables","name":"Mixed vegetables","qty":250,"unit":"g"},{"id":"i-onion","name":"Onion","qty":80,"unit":"g"},{"id":"i-tomato","name":"Tomato","qty":100,"unit":"g"},{"id":"i-coconut-milk","name":"Coconut milk","qty":200,"unit":"ml"},{"id":"i-spices","name":"Spices","qty":10,"unit":"g"}]'::jsonb,
  ARRAY['Sauté 1 onion and 1 chopped tomato until soft.', 'Add 2 cups mixed vegetables (potatoes, carrots, peas).', 'Stir in 1 tsp turmeric and 1 tsp chili powder.', 'Pour in 1 cup coconut milk and 1/2 cup water.', 'Simmer for 15 min until vegetables are tender.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000019',
  'Fish Curry',
  'Lunch',
  '25 min',
  2,
  '340 kcal',
  '28g',
  '16g',
  '12g',
  'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-fish-fillets","name":"Fish fillets","qty":500,"unit":"g"},{"id":"i-tamarind-paste","name":"Tamarind paste","qty":20,"unit":"g"},{"id":"i-coconut-milk","name":"Coconut milk","qty":60,"unit":"ml"},{"id":"i-turmeric","name":"Turmeric","qty":5,"unit":"g"},{"id":"i-chili-powder","name":"Chili powder","qty":8,"unit":"g"}]'::jsonb,
  ARRAY['Soak small ball of tamarind in 1/2 cup warm water.', 'Heat oil and sauté ginger, garlic, and green chilies.', 'Add tamarind water, 1 tsp turmeric, and 2 tsp chili powder.', 'Gently place 500g fish pieces into the gravy.', 'Cook for 10 min and finish with 1/4 cup coconut milk.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000020',
  'Beef Fry',
  'Lunch',
  '35 min',
  2,
  '450 kcal',
  '32g',
  '28g',
  '8g',
  'https://images.unsplash.com/photo-1603360946369-fa99d57ee7ca?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-beef","name":"Beef","qty":500,"unit":"g"},{"id":"i-onions","name":"Onions","qty":150,"unit":"g"},{"id":"i-coconut-slices","name":"Coconut slices","qty":40,"unit":"g"},{"id":"i-ginger","name":"Ginger","qty":15,"unit":"g"},{"id":"i-garam-masala","name":"Garam masala","qty":10,"unit":"g"}]'::jsonb,
  ARRAY['Pressure cook 500g beef with ginger and salt for 20 min.', 'In a pan, sauté 2 sliced onions and 1/4 cup coconut slices.', 'Add cooked beef and 2 tsp garam masala.', 'Stir-fry on medium-high heat until the beef turns dark brown.', 'Garnish with plenty of curry leaves.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000021',
  'Fried Rice',
  'Lunch',
  '15 min',
  2,
  '380 kcal',
  '10g',
  '12g',
  '58g',
  'https://images.unsplash.com/photo-1603133872878-6966b46b7f4c?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-cooked-rice","name":"Cooked rice","qty":400,"unit":"g"},{"id":"i-soy-sauce","name":"Soy sauce","qty":30,"unit":"ml"},{"id":"i-scallions","name":"Scallions","qty":30,"unit":"g"},{"id":"i-eggs-or-mixed-veggies","name":"Eggs or Mixed Veggies","qty":120,"unit":"g"},{"id":"i-oil","name":"Oil","qty":25,"unit":"ml"}]'::jsonb,
  ARRAY['Heat 2 tbsp oil in a wok on high heat.', 'Scramble 2 eggs or sauté 1 cup chopped veggies.', 'Add 3 cups cold cooked rice.', 'Pour 2 tbsp soy sauce and 1 tsp pepper.', 'Toss for 3 min and top with 1/4 cup scallions.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000022',
  'Lemon Rice',
  'Lunch',
  '15 min',
  2,
  '320 kcal',
  '6g',
  '10g',
  '52g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-cooked-rice","name":"Cooked rice","qty":400,"unit":"g"},{"id":"i-lemon-juice","name":"Lemon juice","qty":30,"unit":"ml"},{"id":"i-peanuts","name":"Peanuts","qty":30,"unit":"g"},{"id":"i-turmeric","name":"Turmeric","qty":3,"unit":"g"},{"id":"i-curry-leaves---spices","name":"Curry leaves & spices","qty":5,"unit":"g"}]'::jsonb,
  ARRAY['Heat 1 tbsp oil; fry 2 tbsp peanuts until crunchy.', 'Add 1 tsp mustard seeds and curry leaves.', 'Add 1/2 tsp turmeric and turn off the heat.', 'Mix in 3 cups cooked rice and 1 tsp salt.', 'Squeeze the juice of 1 lemon over and mix well.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000023',
  'Thali Meals',
  'Lunch',
  '45 min',
  2,
  '750 kcal',
  '22g',
  '18g',
  '110g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-basmati-rice","name":"Basmati rice","qty":150,"unit":"g"},{"id":"i-dal","name":"Dal","qty":100,"unit":"g"},{"id":"i-mixed-vegetables--side-","name":"Mixed vegetables (side)","qty":200,"unit":"g"},{"id":"i-curd","name":"Curd","qty":100,"unit":"g"},{"id":"i-pickle---papad","name":"Pickle & Papad","qty":30,"unit":"g"},{"id":"i-dessert--payasam-","name":"Dessert (Payasam)","qty":80,"unit":"g"}]'::jsonb,
  ARRAY['Prepare 1 cup steamed rice as the center base.', 'Arrange 4 small bowls around the rice.', 'Fill bowls with Dal, Vegetable Curry, Curd, and Payasam.', 'Place 1 papad and 1 tsp pickle on the side.', 'Serve on a large round plate or banana leaf.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000024',
  'Chicken Fry',
  'Indian Favorites',
  '30 min',
  2,
  '420 kcal',
  '34g',
  '24g',
  '12g',
  'https://images.unsplash.com/photo-1562967914-6c17e33bfd3f?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-chicken-pieces","name":"Chicken pieces","qty":500,"unit":"g"},{"id":"i-ginger-garlic-paste","name":"Ginger-garlic paste","qty":20,"unit":"g"},{"id":"i-chili-powder---spices","name":"Chili powder & spices","qty":15,"unit":"g"},{"id":"i-cornflour","name":"Cornflour","qty":30,"unit":"g"}]'::jsonb,
  ARRAY['Marinate 500g chicken with G-G paste, lemon, and spices.', 'Mix in 2 tbsp cornflour for extra crunch.', 'Let it rest for 30 min.', 'Deep fry in hot oil for 12–15 min.', 'Serve hot with onion rings.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000025',
  'Toast',
  'Breakfast',
  '5 min',
  2,
  '180 kcal',
  '4g',
  '6g',
  '26g',
  'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-sliced-bread","name":"Sliced bread","qty":2,"unit":"pcs"},{"id":"i-butter","name":"Butter","qty":10,"unit":"g"},{"id":"i-jam-or-honey","name":"Jam or Honey","qty":15,"unit":"g"}]'::jsonb,
  ARRAY['Place 2 slices of bread in a toaster or on a pan.', 'Heat until golden brown on both sides.', 'Spread 1 tsp butter while the bread is hot.', 'Top with 1 tsp jam or honey.', 'Cut into triangles and serve immediately.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000026',
  'Dal Tadka',
  'Indian Favorites',
  '20 min',
  2,
  '210 kcal',
  '11g',
  '7g',
  '28g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-toor-dal","name":"Toor dal","qty":150,"unit":"g"},{"id":"i-garlic-cloves","name":"Garlic cloves","qty":15,"unit":"g"},{"id":"i-dried-red-chilies","name":"Dried red chilies","qty":3,"unit":"pcs"},{"id":"i-cumin-seeds","name":"Cumin seeds","qty":5,"unit":"g"},{"id":"i-ghee","name":"Ghee","qty":20,"unit":"ml"}]'::jsonb,
  ARRAY['Pressure cook 1 cup toor dal with 3 cups water and turmeric.', 'Heat 2 tbsp ghee in a small pan.', 'Add 1 tsp cumin, 4 cloves garlic, and 2 red chilies.', 'Fry until garlic turns golden brown.', 'Pour the hot tempering over the cooked dal and mix.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000027',
  'Aloo Paratha',
  'Indian Favorites',
  '25 min',
  2,
  '290 kcal',
  '6g',
  '9g',
  '48g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-wheat-flour","name":"Wheat flour","qty":100,"unit":"g"},{"id":"i-boiled-potatoes","name":"Boiled potatoes","qty":150,"unit":"g"},{"id":"i-green-chili","name":"Green chili","qty":5,"unit":"g"},{"id":"i-amchur-powder","name":"Amchur powder","qty":3,"unit":"g"},{"id":"i-butter","name":"Butter","qty":15,"unit":"g"}]'::jsonb,
  ARRAY['Mash 2 boiled potatoes with chili, salt, and 1/2 tsp amchur.', 'Roll a ball of wheat dough into a small circle.', 'Place 2 tbsp potato filling in the center and seal.', 'Roll out gently into a 7-inch flatbread.', 'Cook on a griddle with 1 tsp butter until golden spots appear.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000028',
  'Pav Bhaji',
  'Indian Favorites',
  '30 min',
  2,
  '400 kcal',
  '8g',
  '18g',
  '54g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-mixed-vegetables","name":"Mixed vegetables","qty":250,"unit":"g"},{"id":"i-pav-bread-rolls","name":"Pav bread rolls","qty":4,"unit":"pcs"},{"id":"i-butter","name":"Butter","qty":40,"unit":"g"},{"id":"i-pav-bhaji-masala","name":"Pav bhaji masala","qty":15,"unit":"g"},{"id":"i-onion---tomato","name":"Onion & Tomato","qty":150,"unit":"g"}]'::jsonb,
  ARRAY['Boil and mash 2 potatoes, 1/2 cup peas, and 1/2 cup cauliflower.', 'Sauté 1 onion and 1 tomato with 2 tbsp pav bhaji masala.', 'Mix the mashed veggies with the masala and 1/2 cup water.', 'Simmer with a large cube of butter for 10 min.', 'Toast pav rolls with butter and serve with the bhaji.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000029',
  'Bhel Puri',
  'Indian Favorites',
  '10 min',
  2,
  '190 kcal',
  '4g',
  '6g',
  '32g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-puffed-rice","name":"Puffed rice","qty":60,"unit":"g"},{"id":"i-sev","name":"Sev","qty":30,"unit":"g"},{"id":"i-onion---tomato","name":"Onion & Tomato","qty":80,"unit":"g"},{"id":"i-tamarind-chutney","name":"Tamarind chutney","qty":30,"unit":"ml"},{"id":"i-fresh-coriander","name":"Fresh coriander","qty":5,"unit":"g"}]'::jsonb,
  ARRAY['Mix 2 cups puffed rice with 1/4 cup sev.', 'Add 1 chopped onion and 1 chopped tomato.', 'Stir in 2 tbsp tamarind chutney and a pinch of salt.', 'Toss quickly so the puffed rice stays crunchy.', 'Garnish with fresh coriander and serve immediately.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000030',
  'Gajar Halwa',
  'Indian Favorites',
  '35 min',
  2,
  '320 kcal',
  '6g',
  '14g',
  '45g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-grated-carrots","name":"Grated carrots","qty":250,"unit":"g"},{"id":"i-full-fat-milk","name":"Full-fat milk","qty":500,"unit":"ml"},{"id":"i-sugar","name":"Sugar","qty":100,"unit":"g"},{"id":"i-ghee","name":"Ghee","qty":30,"unit":"ml"},{"id":"i-almonds---cashews","name":"Almonds & Cashews","qty":20,"unit":"g"}]'::jsonb,
  ARRAY['Sauté 2 cups grated carrots in 2 tbsp ghee for 5 min.', 'Add 2 cups milk and cook until the milk evaporates.', 'Stir in 1/2 cup sugar and cook until thick.', 'Add 1/2 tsp cardamom powder.', 'Garnish with chopped almonds and cashews.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000031',
  'Mango Pudding',
  'Indian Favorites',
  '20 min',
  2,
  '180 kcal',
  '3g',
  '4g',
  '34g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-mango-pulp","name":"Mango pulp","qty":200,"unit":"g"},{"id":"i-milk","name":"Milk","qty":200,"unit":"ml"},{"id":"i-sugar","name":"Sugar","qty":40,"unit":"g"},{"id":"i-agar-agar--gelatin-","name":"Agar-agar (gelatin)","qty":5,"unit":"g"}]'::jsonb,
  ARRAY['Dissolve 1 tsp agar-agar in 1/4 cup warm water.', 'Mix 1 cup mango pulp, 1 cup milk, and 2 tbsp sugar.', 'Heat the mixture gently (do not boil).', 'Stir in the dissolved agar-agar.', 'Pour into molds and refrigerate for 4 hours until set.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000032',
  'Mango Lassi',
  'Indian Favorites',
  '10 min',
  2,
  '210 kcal',
  '5g',
  '4g',
  '38g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-thick-curd","name":"Thick curd","qty":250,"unit":"g"},{"id":"i-mango-pulp","name":"Mango pulp","qty":120,"unit":"g"},{"id":"i-sugar","name":"Sugar","qty":30,"unit":"g"},{"id":"i-cardamom-powder","name":"Cardamom powder","qty":1,"unit":"g"}]'::jsonb,
  ARRAY['Add 1 cup thick curd and 1/2 cup mango pulp to a blender.', 'Add 2 tbsp sugar and a pinch of cardamom.', 'Blend for 30 seconds until smooth and frothy.', 'Pour into a tall glass.', 'Serve chilled with a garnish of saffron strands.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000033',
  'Virgin Mojito',
  'Lunch',
  '5 min',
  2,
  '90 kcal',
  '0g',
  '0g',
  '22g',
  'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-lemon-wedges","name":"Lemon wedges","qty":2,"unit":"pcs"},{"id":"i-mint-leaves","name":"Mint leaves","qty":8,"unit":"pcs"},{"id":"i-sugar-syrup","name":"Sugar syrup","qty":20,"unit":"ml"},{"id":"i-club-soda","name":"Club soda","qty":200,"unit":"ml"},{"id":"i-ice-cubes","name":"Ice cubes","qty":50,"unit":"g"}]'::jsonb,
  ARRAY['Muddle 6 mint leaves and 2 lemon wedges in a glass.', 'Add 1 tbsp sugar or simple syrup.', 'Fill the glass with ice cubes.', 'Top up with chilled club soda.', 'Stir gently and garnish with a fresh mint sprig.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000034',
  'Butter Chicken',
  'Dinner',
  '35 min',
  2,
  '480 kcal',
  '32g',
  '35g',
  '10g',
  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-chicken-cubes","name":"Chicken cubes","qty":500,"unit":"g"},{"id":"i-tomato-puree","name":"Tomato puree","qty":200,"unit":"g"},{"id":"i-butter","name":"Butter","qty":45,"unit":"g"},{"id":"i-heavy-cream","name":"Heavy cream","qty":100,"unit":"ml"},{"id":"i-kasuri-methi---spices","name":"Kasuri methi & spices","qty":10,"unit":"g"}]'::jsonb,
  ARRAY['Marinate 500g chicken in yogurt and spices; grill until cooked.', 'Sauté 1 cup tomato puree in 3 tbsp butter until thickened.', 'Add 1 tsp sugar, salt, and 1 tsp garam masala.', 'Toss in the grilled chicken and 1/2 cup heavy cream.', 'Simmer for 5 min and garnish with 1 tsp crushed kasuri methi.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000035',
  'Veg Pulav',
  'Lunch',
  '25 min',
  2,
  '320 kcal',
  '6g',
  '8g',
  '56g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-basmati-rice","name":"Basmati rice","qty":200,"unit":"g"},{"id":"i-mixed-vegetables","name":"Mixed vegetables","qty":150,"unit":"g"},{"id":"i-whole-spices","name":"Whole spices","qty":5,"unit":"g"},{"id":"i-ghee","name":"Ghee","qty":20,"unit":"ml"},{"id":"i-onion","name":"Onion","qty":60,"unit":"g"}]'::jsonb,
  ARRAY['Soak 1 cup Basmati rice for 20 min.', 'Sauté 1 cinnamon stick, 2 cloves, and 1 sliced onion in ghee.', 'Add 1 cup mixed vegetables and sauté for 2 min.', 'Add rice and 2 cups water; bring to a boil.', 'Cover and cook on low heat for 12 min until water is absorbed.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000036',
  'Momos (Veg)',
  'Dinner',
  '30 min',
  2,
  '240 kcal',
  '5g',
  '4g',
  '45g',
  'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-maida-flour","name":"Maida flour","qty":150,"unit":"g"},{"id":"i-grated-cabbage---carrot","name":"Grated cabbage & carrot","qty":200,"unit":"g"},{"id":"i-ginger---garlic","name":"Ginger & Garlic","qty":10,"unit":"g"},{"id":"i-soy-sauce","name":"Soy sauce","qty":15,"unit":"ml"}]'::jsonb,
  ARRAY['Knead 1 cup maida with water into a soft, firm dough.', 'Sauté 1 cup grated cabbage and 1/2 cup carrot with ginger.', 'Add 1 tsp soy sauce and salt to the veggie mix.', 'Roll dough into thin circles, fill with 1 tbsp mixture, and pleat.', 'Steam in a greased steamer for 10–12 min.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000037',
  'Aloo Tikki',
  'Indian Favorites',
  '20 min',
  2,
  '220 kcal',
  '4g',
  '10g',
  '30g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-boiled-potatoes","name":"Boiled potatoes","qty":300,"unit":"g"},{"id":"i-cornflour","name":"Cornflour","qty":20,"unit":"g"},{"id":"i-green-chilies---spices","name":"Green chilies & spices","qty":5,"unit":"g"},{"id":"i-cilantro","name":"Cilantro","qty":10,"unit":"g"},{"id":"i-oil","name":"Oil","qty":20,"unit":"ml"}]'::jsonb,
  ARRAY['Mash 3 boiled potatoes with 2 tbsp cornflour.', 'Mix in chopped chilies, salt, and cilantro.', 'Shape into small, flat round patties.', 'Heat 2 tbsp oil in a shallow pan.', 'Fry patties on medium heat until both sides are dark golden brown.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000038',
  'Spaghetti Carbonara',
  'Dinner',
  '20 min',
  2,
  '460 kcal',
  '18g',
  '22g',
  '48g',
  'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-spaghetti","name":"Spaghetti","qty":200,"unit":"g"},{"id":"i-eggs","name":"Eggs","qty":2,"unit":"pcs"},{"id":"i-parmesan-cheese","name":"Parmesan cheese","qty":50,"unit":"g"},{"id":"i-garlic-cloves","name":"Garlic cloves","qty":10,"unit":"g"},{"id":"i-black-pepper---oil","name":"Black pepper & oil","qty":15,"unit":"g"}]'::jsonb,
  ARRAY['Boil 200g spaghetti in salted water; reserve 1/4 cup pasta water.', 'Whisk 2 eggs with 1/2 cup grated parmesan.', 'Sauté 2 cloves garlic in oil; remove garlic once browned.', 'Toss hot pasta in the oil, then remove from heat.', 'Quickly stir in egg mixture and pasta water to create a creamy sauce.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000039',
  'Falafel',
  'Dinner',
  '25 min',
  2,
  '280 kcal',
  '10g',
  '14g',
  '32g',
  'https://images.unsplash.com/photo-1547058886-af77993d452b?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-soaked-chickpeas","name":"Soaked chickpeas","qty":200,"unit":"g"},{"id":"i-parsley","name":"Parsley","qty":30,"unit":"g"},{"id":"i-garlic-cloves","name":"Garlic cloves","qty":10,"unit":"g"},{"id":"i-cumin","name":"Cumin","qty":5,"unit":"g"},{"id":"i-all-purpose-flour","name":"All-purpose flour","qty":20,"unit":"g"}]'::jsonb,
  ARRAY['Blend 1 cup soaked chickpeas (not boiled) with parsley and garlic.', 'Mix in 1 tsp cumin and 2 tbsp flour to bind.', 'Shape into small balls or discs.', 'Deep fry in hot oil for 4–5 min until dark brown.', 'Serve inside pita bread with tahini or hummus.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000040',
  'Strawberry Milkshake',
  'Breakfast',
  '5 min',
  2,
  '250 kcal',
  '6g',
  '10g',
  '34g',
  'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-fresh-strawberries","name":"Fresh strawberries","qty":150,"unit":"g"},{"id":"i-chilled-milk","name":"Chilled milk","qty":300,"unit":"ml"},{"id":"i-sugar","name":"Sugar","qty":25,"unit":"g"},{"id":"i-vanilla-ice-cream","name":"Vanilla ice cream","qty":50,"unit":"g"}]'::jsonb,
  ARRAY['Clean and hull 1 cup strawberries.', 'Blend berries with 2 tbsp sugar into a smooth puree.', 'Add 1.5 cups milk and 1 scoop vanilla ice cream.', 'Blend again until frothy and thick.', 'Pour into a glass and garnish with a strawberry slice.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000041',
  'Iced Tea',
  'Lunch',
  '10 min',
  2,
  '60 kcal',
  '0g',
  '0g',
  '15g',
  'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-tea-bags","name":"Tea bags","qty":2,"unit":"pcs"},{"id":"i-water","name":"Water","qty":250,"unit":"ml"},{"id":"i-lemon-slices","name":"Lemon slices","qty":3,"unit":"pcs"},{"id":"i-honey","name":"Honey","qty":15,"unit":"g"},{"id":"i-ice-cubes","name":"Ice cubes","qty":50,"unit":"g"}]'::jsonb,
  ARRAY['Brew 2 tea bags in 1 cup boiling water for 5 min.', 'Remove tea bags and stir in 1 tbsp honey.', 'Let the tea cool to room temperature.', 'Fill a tall glass with ice cubes and lemon slices.', 'Pour the tea over ice and top with a splash of cold water.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000042',
  'Lentil Soup (Dal Shorba)',
  'Lunch',
  '25 min',
  2,
  '160 kcal',
  '9g',
  '4g',
  '22g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-moong-dal","name":"Moong dal","qty":100,"unit":"g"},{"id":"i-ginger-garlic-paste","name":"Ginger-garlic paste","qty":10,"unit":"g"},{"id":"i-turmeric---spices","name":"Turmeric & spices","qty":5,"unit":"g"},{"id":"i-lemon-juice","name":"Lemon juice","qty":15,"unit":"ml"},{"id":"i-butter-or-oil","name":"Butter or oil","qty":10,"unit":"ml"}]'::jsonb,
  ARRAY['Boil 1 cup moong dal with 4 cups water and turmeric until mushy.', 'Sauté 1 tsp ginger-garlic paste in a little butter or oil.', 'Mix the dal into the sautéed paste and whisk until smooth.', 'Simmer for 5 min and add 1 tsp salt.', 'Serve hot with a squeeze of lemon juice.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000043',
  'Jeera Aloo',
  'Indian Favorites',
  '15 min',
  2,
  '190 kcal',
  '3g',
  '8g',
  '27g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-boiled-potatoes","name":"Boiled potatoes","qty":300,"unit":"g"},{"id":"i-cumin-seeds","name":"Cumin seeds","qty":10,"unit":"g"},{"id":"i-turmeric","name":"Turmeric","qty":3,"unit":"g"},{"id":"i-green-chili","name":"Green chili","qty":5,"unit":"g"},{"id":"i-oil","name":"Oil","qty":15,"unit":"ml"}]'::jsonb,
  ARRAY['Cube 3 boiled potatoes into bite-sized pieces.', 'Heat 2 tbsp oil and add 1.5 tsp cumin seeds until they sizzle.', 'Add chopped green chilies and the potato cubes.', 'Sprinkle 1/2 tsp turmeric and 1 tsp salt.', 'Toss on high heat for 5 min until the potatoes are crispy.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000044',
  'Garlic Bread',
  'Dinner',
  '10 min',
  2,
  '280 kcal',
  '6g',
  '14g',
  '32g',
  'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-bread-slices","name":"Bread slices","qty":4,"unit":"pcs"},{"id":"i-softened-butter","name":"Softened butter","qty":30,"unit":"g"},{"id":"i-garlic-cloves--minced-","name":"Garlic cloves (minced)","qty":15,"unit":"g"},{"id":"i-oregano","name":"Oregano","qty":2,"unit":"g"},{"id":"i-grated-cheese","name":"Grated cheese","qty":30,"unit":"g"}]'::jsonb,
  ARRAY['Mix 2 tbsp softened butter with 3 cloves minced garlic.', 'Spread the garlic butter generously over 4 slices of bread.', 'Sprinkle a pinch of oregano and 2 tbsp grated cheese.', 'Bake at 200°C for 5–7 min until edges are golden.', 'Serve warm as a side or a snack.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000045',
  'Chicken Nuggets (Homemade)',
  'Dinner',
  '20 min',
  2,
  '320 kcal',
  '24g',
  '16g',
  '18g',
  'https://images.unsplash.com/photo-1562967914-6c17e33bfd3f?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-chicken-breast","name":"Chicken breast","qty":250,"unit":"g"},{"id":"i-breadcrumbs","name":"Breadcrumbs","qty":80,"unit":"g"},{"id":"i-egg","name":"Egg","qty":1,"unit":"pcs"},{"id":"i-flour","name":"Flour","qty":30,"unit":"g"},{"id":"i-oil","name":"Oil","qty":20,"unit":"ml"}]'::jsonb,
  ARRAY['Cut 250g chicken into small cubes; season with salt and pepper.', 'Coat chicken in 1/4 cup flour, then dip into a beaten egg.', 'Press firmly into 1/2 cup breadcrumbs until fully coated.', 'Deep fry in hot oil for 6–8 min until crunchy.', 'Serve with 2 tbsp tomato ketchup.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000046',
  'Caramel Popcorn',
  'Dinner',
  '15 min',
  2,
  '260 kcal',
  '3g',
  '10g',
  '38g',
  'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-popped-popcorn","name":"Popped popcorn","qty":60,"unit":"g"},{"id":"i-sugar","name":"Sugar","qty":100,"unit":"g"},{"id":"i-butter","name":"Butter","qty":15,"unit":"g"}]'::jsonb,
  ARRAY['Melt 1/2 cup sugar in a pan until it turns into a brown liquid.', 'Quickly stir in 1 tbsp butter and a pinch of salt.', 'Pour the caramel over 4 cups of popped popcorn.', 'Toss immediately with a spatula to coat every piece.', 'Spread on a tray to cool and harden for 10 min.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000047',
  'Sweet Pancakes (Crepe Style)',
  'Breakfast',
  '15 min',
  2,
  '280 kcal',
  '7g',
  '8g',
  '42g',
  'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-flour","name":"Flour","qty":120,"unit":"g"},{"id":"i-milk","name":"Milk","qty":250,"unit":"ml"},{"id":"i-egg","name":"Egg","qty":1,"unit":"pcs"},{"id":"i-sugar---spreads","name":"Sugar & spreads","qty":30,"unit":"g"}]'::jsonb,
  ARRAY['Whisk 1 cup flour, 1.5 cups milk, and 1 egg into a thin batter.', 'Pour a thin layer onto a hot, buttered pan.', 'Cook for 1 min per side until light brown.', 'Spread 1 tbsp Nutella or add sliced strawberries inside.', 'Roll or fold the pancake and serve.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000048',
  'Pineapple Juice',
  'Breakfast',
  '10 min',
  2,
  '120 kcal',
  '1g',
  '0g',
  '28g',
  'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-pineapple-chunks","name":"Pineapple chunks","qty":300,"unit":"g"},{"id":"i-sugar","name":"Sugar","qty":25,"unit":"g"},{"id":"i-black-salt","name":"Black salt","qty":2,"unit":"g"},{"id":"i-water","name":"Water","qty":100,"unit":"ml"}]'::jsonb,
  ARRAY['Peel and core 1 medium pineapple; cut into chunks.', 'Blend with 1/2 cup water and 2 tbsp sugar.', 'Strain the juice through a fine sieve to remove pulp.', 'Add a pinch of black salt for a tangy kick.', 'Pour into a glass over 4 ice cubes.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000049',
  'Honey Lemon Ginger Tea',
  'Breakfast',
  '10 min',
  2,
  '50 kcal',
  '0g',
  '0g',
  '12g',
  'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-fresh-ginger","name":"Fresh ginger","qty":15,"unit":"g"},{"id":"i-lemon-juice","name":"Lemon juice","qty":15,"unit":"ml"},{"id":"i-honey","name":"Honey","qty":15,"unit":"g"},{"id":"i-water","name":"Water","qty":350,"unit":"ml"}]'::jsonb,
  ARRAY['Boil 2 cups water with 1 inch crushed ginger for 5 min.', 'Strain the tea into a cup.', 'Stir in 1 tbsp honey until dissolved.', 'Add 1 tbsp lemon juice.', 'Drink warm for a soothing, healthy boost.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000050',
  'Kadhi Pakora',
  'Indian Favorites',
  '35 min',
  2,
  '280 kcal',
  '8g',
  '14g',
  '30g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-yogurt--curd-","name":"Yogurt (Curd)","qty":200,"unit":"g"},{"id":"i-gram-flour--besan-","name":"Gram flour (Besan)","qty":100,"unit":"g"},{"id":"i-onions","name":"Onions","qty":100,"unit":"g"},{"id":"i-turmeric---ginger","name":"Turmeric & Ginger","qty":10,"unit":"g"},{"id":"i-ghee---spices","name":"Ghee & spices","qty":15,"unit":"ml"}]'::jsonb,
  ARRAY['Mix 1 cup curd with 2 tbsp besan and 3 cups water; whisk well.', 'Make a thick paste with 1/2 cup besan, spices, and sliced onions; deep fry as small balls (pakoras).', 'Boil the curd mixture with turmeric and ginger for 15 min on low heat.', 'Add the fried pakoras to the simmering gravy.', 'Temper with cumin, dried red chilies, and curry leaves in 1 tbsp ghee.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000051',
  'Baingan Bharta',
  'Indian Favorites',
  '30 min',
  2,
  '170 kcal',
  '4g',
  '9g',
  '18g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-large-eggplant","name":"Large eggplant","qty":400,"unit":"g"},{"id":"i-onion---tomato","name":"Onion & Tomato","qty":150,"unit":"g"},{"id":"i-garlic-cloves","name":"Garlic cloves","qty":15,"unit":"g"},{"id":"i-green-chili---oil","name":"Green chili & oil","qty":15,"unit":"ml"}]'::jsonb,
  ARRAY['Roast 1 large eggplant over an open flame until the skin is charred and the inside is soft.', 'Peel the skin and mash the pulp thoroughly.', 'Sauté 1 chopped onion and 2 cloves garlic in oil until golden.', 'Add 2 chopped tomatoes and spices; cook until soft.', 'Mix in the mashed eggplant and cook for 5 min on medium heat.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000052',
  'Hummus',
  'Lunch',
  '15 min',
  2,
  '230 kcal',
  '8g',
  '14g',
  '22g',
  'https://images.unsplash.com/photo-1574708759560-63162383c27e?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-boiled-chickpeas","name":"Boiled chickpeas","qty":250,"unit":"g"},{"id":"i-tahini-paste","name":"Tahini paste","qty":60,"unit":"g"},{"id":"i-garlic-cloves","name":"Garlic cloves","qty":10,"unit":"g"},{"id":"i-lemon-juice","name":"Lemon juice","qty":30,"unit":"ml"},{"id":"i-olive-oil","name":"Olive oil","qty":45,"unit":"ml"}]'::jsonb,
  ARRAY['Blend 2 cups boiled chickpeas with 1/4 cup tahini and 2 cloves garlic.', 'Add 2 tbsp lemon juice and a pinch of salt.', 'Slowly pour in 3 tbsp olive oil while blending until creamy.', 'If too thick, add 1 tbsp warm water to reach the desired consistency.', 'Serve in a bowl topped with a drizzle of olive oil and paprika.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000053',
  'Greek Salad',
  'Lunch',
  '10 min',
  2,
  '210 kcal',
  '5g',
  '18g',
  '10g',
  'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-cucumber---tomato","name":"Cucumber & Tomato","qty":250,"unit":"g"},{"id":"i-feta-cheese","name":"Feta cheese","qty":50,"unit":"g"},{"id":"i-black-olives","name":"Black olives","qty":30,"unit":"g"},{"id":"i-olive-oil---vinegar","name":"Olive oil & Vinegar","qty":25,"unit":"ml"}]'::jsonb,
  ARRAY['Chop 1 cucumber and 2 tomatoes into large chunks.', 'Mix in 1/4 cup sliced black olives and 1/2 sliced red onion.', 'Top with 50g cubed feta cheese.', 'Drizzle with 2 tbsp olive oil and 1 tsp vinegar.', 'Sprinkle 1/2 tsp dried oregano over the top and toss gently.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000054',
  'Veg Manchurian',
  'Dinner',
  '30 min',
  2,
  '290 kcal',
  '5g',
  '14g',
  '36g',
  'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-grated-cabbage---carrot","name":"Grated cabbage & carrot","qty":250,"unit":"g"},{"id":"i-cornflour","name":"Cornflour","qty":40,"unit":"g"},{"id":"i-soy-sauce---sauce-mix","name":"Soy sauce & sauce mix","qty":45,"unit":"ml"},{"id":"i-ginger-garlic-paste","name":"Ginger-garlic paste","qty":15,"unit":"g"}]'::jsonb,
  ARRAY['Mix 1 cup grated cabbage and 1/2 cup carrot with 3 tbsp cornflour and spices.', 'Form into small balls and deep fry until crispy; set aside.', 'Sauté ginger, garlic, and green chilies in a pan with 1 tbsp oil.', 'Add 2 tbsp soy sauce, 1 tbsp ketchup, and a little water.', 'Toss the fried balls into the sauce and cook for 2 min until coated.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000055',
  'Chili Paneer',
  'Dinner',
  '20 min',
  2,
  '340 kcal',
  '16g',
  '24g',
  '14g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-paneer-cubes","name":"Paneer cubes","qty":200,"unit":"g"},{"id":"i-bell-peppers---onion","name":"Bell peppers & Onion","qty":150,"unit":"g"},{"id":"i-soy---chili-sauce","name":"Soy & chili sauce","qty":30,"unit":"ml"},{"id":"i-cornflour---oil","name":"Cornflour & oil","qty":25,"unit":"g"}]'::jsonb,
  ARRAY['Coat 200g paneer cubes in cornflour and shallow fry until golden.', 'Sauté 1 cubed onion and 1 cubed bell pepper on high heat for 2 min.', 'Add 1 tbsp soy sauce and 1 tbsp chili sauce.', 'Stir in the fried paneer cubes.', 'Garnish with chopped spring onion greens.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000056',
  'Chikoo Shake',
  'Breakfast',
  '5 min',
  2,
  '220 kcal',
  '5g',
  '6g',
  '38g',
  'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-sapodilla--chikoo-","name":"Sapodilla (Chikoo)","qty":3,"unit":"pcs"},{"id":"i-milk","name":"Milk","qty":250,"unit":"ml"},{"id":"i-sugar","name":"Sugar","qty":15,"unit":"g"},{"id":"i-ice-cubes","name":"Ice cubes","qty":4,"unit":"pcs"}]'::jsonb,
  ARRAY['Peel and deseed 3 ripe chikoos.', 'Blend the fruit with 1.5 cups chilled milk and 1 tbsp sugar.', 'Add 3 ice cubes for a thicker, colder consistency.', 'Blend for 45 seconds until smooth.', 'Pour into a glass and serve immediately.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000057',
  'Fruit Custard',
  'Dinner',
  '20 min',
  2,
  '210 kcal',
  '5g',
  '6g',
  '35g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-milk","name":"Milk","qty":400,"unit":"ml"},{"id":"i-custard-powder","name":"Custard powder","qty":20,"unit":"g"},{"id":"i-sugar","name":"Sugar","qty":45,"unit":"g"},{"id":"i-mixed-fruits","name":"Mixed fruits","qty":150,"unit":"g"}]'::jsonb,
  ARRAY['Boil 2 cups milk with 3 tbsp sugar.', 'Dissolve 2 tbsp custard powder in 1/4 cup cold milk; stir into the boiling milk.', 'Cook until the mixture thickens; then cool to room temperature.', 'Chop mixed fruits and add them to the cooled custard.', 'Refrigerate for 2 hours and serve chilled.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000058',
  'Kerala Fish Molee',
  'Indian Favorites',
  '30 min',
  2,
  '320 kcal',
  '26g',
  '22g',
  '10g',
  'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-fish-fillets","name":"Fish fillets","qty":500,"unit":"g"},{"id":"i-coconut-milk--thick---thin-","name":"Coconut milk (thick & thin)","qty":300,"unit":"ml"},{"id":"i-onion---tomatoes","name":"Onion & Tomatoes","qty":150,"unit":"g"},{"id":"i-ginger---green-chilies","name":"Ginger & Green chilies","qty":15,"unit":"g"}]'::jsonb,
  ARRAY['Marinate 500g fish pieces with turmeric, lemon juice, and salt for 20 min.', 'Shallow fry the fish in 1 tbsp coconut oil for 1 min per side; set aside.', 'Sauté 1 sliced onion, 1 tbsp ginger, and 3 green chilies in oil.', 'Pour in 2 cups thin coconut milk and bring to a slow simmer.', 'Add the fish and 1 sliced tomato; simmer covered for 8 min, then stir in 1/2 cup thick coconut milk and remove from heat.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000059',
  'Malabar Parotta',
  'Indian Favorites',
  '40 min',
  2,
  '360 kcal',
  '7g',
  '14g',
  '52g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-all-purpose-flour--maida-","name":"All-purpose flour (Maida)","qty":300,"unit":"g"},{"id":"i-milk","name":"Milk","qty":60,"unit":"ml"},{"id":"i-sugar","name":"Sugar","qty":15,"unit":"g"},{"id":"i-oil-or-ghee","name":"Oil or Ghee","qty":45,"unit":"ml"}]'::jsonb,
  ARRAY['Knead 3 cups flour, 1 egg, 1 tbsp sugar, and 1/4 cup milk into a soft dough.', 'Coat the dough with 1 tbsp oil and let it rest covered for 2 hours.', 'Divide into balls; roll each ball very thin and brush with 1 tsp oil.', 'Pleat or cut the dough into strips, roll it tightly into a spiral shape, and flatten gently.', 'Cook on a hot griddle with 1 tsp ghee per side until golden brown and flaky layers separate.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000060',
  'Chicken Tikka Masala',
  'Dinner',
  '35 min',
  2,
  '440 kcal',
  '34g',
  '28g',
  '12g',
  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-chicken-cubes","name":"Chicken cubes","qty":500,"unit":"g"},{"id":"i-yogurt---heavy-cream","name":"Yogurt & Heavy cream","qty":150,"unit":"ml"},{"id":"i-tomato-puree","name":"Tomato puree","qty":200,"unit":"g"},{"id":"i-onion---spices","name":"Onion & spices","qty":120,"unit":"g"}]'::jsonb,
  ARRAY['Marinate 500g chicken in 1/2 cup yogurt and spices; grill for 15 min.', 'Sauté 1 chopped onion and 1 tsp ginger-garlic paste until golden.', 'Pour in 1 cup tomato puree and simmer until the oil separates.', 'Stir in the grilled chicken cubes and 1/2 cup water; cook for 5 min.', 'Finish by mixing in 1/4 cup heavy cream and a pinch of garam masala.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000061',
  'Jeera Rice',
  'Lunch',
  '20 min',
  2,
  '280 kcal',
  '5g',
  '8g',
  '48g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-basmati-rice","name":"Basmati rice","qty":200,"unit":"g"},{"id":"i-cumin-seeds--jeera-","name":"Cumin seeds (Jeera)","qty":8,"unit":"g"},{"id":"i-ghee","name":"Ghee","qty":25,"unit":"ml"},{"id":"i-whole-spices","name":"Whole spices","qty":3,"unit":"g"}]'::jsonb,
  ARRAY['Wash and soak 1 cup Basmati rice for 20 min; drain completely.', 'Heat 2 tbsp ghee in a pot; add 1.5 tsp cumin seeds and 2 cloves.', 'Once the cumin splutters, add the soaked rice and toast gently for 1 min.', 'Pour in 2 cups water and add 1 tsp salt.', 'Bring to a boil, then cover and simmer on low heat for 12 min until fluffy.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000062',
  'Aloo Matar',
  'Indian Favorites',
  '25 min',
  2,
  '220 kcal',
  '5g',
  '6g',
  '34g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-potatoes--aloo-","name":"Potatoes (Aloo)","qty":200,"unit":"g"},{"id":"i-green-peas--matar-","name":"Green peas (Matar)","qty":150,"unit":"g"},{"id":"i-onion---tomato-puree","name":"Onion & Tomato puree","qty":150,"unit":"g"},{"id":"i-spices","name":"Spices","qty":8,"unit":"g"}]'::jsonb,
  ARRAY['Cube 2 potatoes and set aside with 1 cup green peas.', 'Sauté 1 chopped onion and 1 tsp ginger paste in oil.', 'Add 1/2 cup tomato puree, 1/2 tsp turmeric, and 1 tsp chili powder.', 'Toss in the potatoes, peas, 1 tsp salt, and 1 cup water.', 'Cover and cook on medium heat for 15 min until potatoes are soft.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000063',
  'Mix Veg Raita',
  'Lunch',
  '10 min',
  2,
  '110 kcal',
  '5g',
  '4g',
  '12g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-plain-curd--yogurt-","name":"Plain curd (Yogurt)","qty":250,"unit":"g"},{"id":"i-cucumber---tomato","name":"Cucumber & Tomato","qty":100,"unit":"g"},{"id":"i-onion","name":"Onion","qty":40,"unit":"g"},{"id":"i-roasted-cumin-powder","name":"Roasted cumin powder","qty":3,"unit":"g"}]'::jsonb,
  ARRAY['Whisk 2 cups fresh curd until completely smooth.', 'Finely chop 1/2 cucumber, 1/2 tomato, and 1 small onion.', 'Mix the chopped vegetables directly into the whisked curd.', 'Add 1/2 tsp salt and 1/2 tsp black pepper.', 'Sprinkle 1/2 tsp roasted cumin powder over the top before serving chilled.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000064',
  'Onion Bhaji (Pyaza Pakoda)',
  'Indian Favorites',
  '15 min',
  2,
  '260 kcal',
  '6g',
  '14g',
  '28g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-sliced-onions","name":"Sliced onions","qty":200,"unit":"g"},{"id":"i-gram-flour--besan-","name":"Gram flour (Besan)","qty":100,"unit":"g"},{"id":"i-rice-flour","name":"Rice flour","qty":20,"unit":"g"},{"id":"i-green-chilies","name":"Green chilies","qty":5,"unit":"g"},{"id":"i-oil","name":"Oil","qty":25,"unit":"ml"}]'::jsonb,
  ARRAY['Thinly slice 2 large onions and separate the layers in a bowl.', 'Mix in 1 cup besan, 2 tbsp rice flour, and 1/2 tsp turmeric.', 'Add chopped green chilies, salt, and 2 tbsp water to form a thick, sticky coating.', 'Drop small, rough clumps of the onion mixture into hot oil.', 'Deep fry on medium heat for 5 min until completely crispy and golden.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000065',
  'Bread Upma',
  'Breakfast',
  '15 min',
  2,
  '240 kcal',
  '5g',
  '8g',
  '36g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-bread-slices","name":"Bread slices","qty":6,"unit":"pcs"},{"id":"i-onion---tomato","name":"Onion & Tomato","qty":100,"unit":"g"},{"id":"i-mustard-seeds---curry-leaves","name":"Mustard seeds & Curry leaves","qty":5,"unit":"g"},{"id":"i-turmeric---oil","name":"Turmeric & oil","qty":15,"unit":"g"}]'::jsonb,
  ARRAY['Cut 6 slices of bread into bite-sized cubes; toast them slightly.', 'Heat 1 tbsp oil; crackle 1 tsp mustard seeds and a few curry leaves.', 'Sauté 1 chopped onion and 1 green chili until translucent.', 'Add 1 chopped tomato, 1/4 tsp turmeric, and 1/2 tsp salt; cook until soft.', 'Toss the bread cubes into the masala, mix well for 2 min, and serve hot.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000066',
  'Masala Chai',
  'Breakfast',
  '10 min',
  2,
  '90 kcal',
  '3g',
  '3g',
  '12g',
  'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-tea-leaves","name":"Tea leaves","qty":10,"unit":"g"},{"id":"i-milk","name":"Milk","qty":200,"unit":"ml"},{"id":"i-ginger---cardamom","name":"Ginger & Cardamom","qty":10,"unit":"g"},{"id":"i-water","name":"Water","qty":200,"unit":"ml"}]'::jsonb,
  ARRAY['Bring 1 cup water to a boil with 1 inch crushed ginger and 2 crushed cardamoms.', 'Add 2 tsp tea leaves and let it simmer for 2 min until dark.', 'Pour in 1 cup milk and add 2 tsp sugar.', 'Bring the tea to a rolling boil twice, adjusting the heat so it doesn''t spill.', 'Strain through a sieve directly into cups and serve hot.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000067',
  'Kaju Katli',
  'Indian Favorites',
  '25 min',
  2,
  '340 kcal',
  '6g',
  '18g',
  '38g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-cashews--kaju-","name":"Cashews (Kaju)","qty":150,"unit":"g"},{"id":"i-sugar","name":"Sugar","qty":100,"unit":"g"},{"id":"i-water","name":"Water","qty":60,"unit":"ml"},{"id":"i-ghee","name":"Ghee","qty":10,"unit":"ml"}]'::jsonb,
  ARRAY['Grind 1 cup raw cashews into a fine powder; do not over-blend to avoid oil extraction.', 'Dissolve 1/2 cup sugar in 1/4 cup water over low heat until sticky.', 'Stir in the cashew powder and 1 tsp ghee; stir constantly for 8 min until a dough forms.', 'Turn the dough onto a greased surface, roll it thin while warm, and let it cool.', 'Cut diagonally into diamond shapes and serve.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000068',
  'Shahi Paneer',
  'Dinner',
  '25 min',
  2,
  '380 kcal',
  '14g',
  '30g',
  '12g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-paneer","name":"Paneer","qty":200,"unit":"g"},{"id":"i-onion---tomato-puree","name":"Onion & Tomato puree","qty":150,"unit":"g"},{"id":"i-cashews","name":"Cashews","qty":30,"unit":"g"},{"id":"i-heavy-cream","name":"Heavy cream","qty":45,"unit":"ml"},{"id":"i-ghee---spices","name":"Ghee & spices","qty":15,"unit":"ml"}]'::jsonb,
  ARRAY['Boil 1 chopped onion and 10 cashews in water for 10 min; grind to a smooth paste.', 'Sauté the onion-cashew paste in 1 tbsp ghee until fragrant.', 'Add 1/2 cup tomato puree, 1/2 tsp turmeric, and 1 tsp chili powder.', 'Mix in 200g paneer cubes and 1/2 cup water; simmer for 5 min.', 'Stir in 3 tbsp heavy cream and a pinch of saffron before serving.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000069',
  'Ghee Rice',
  'Lunch',
  '20 min',
  2,
  '320 kcal',
  '5g',
  '14g',
  '45g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-basmati-rice","name":"Basmati rice","qty":200,"unit":"g"},{"id":"i-ghee","name":"Ghee","qty":45,"unit":"ml"},{"id":"i-cashews---raisins","name":"Cashews & Raisins","qty":30,"unit":"g"},{"id":"i-sliced-onion","name":"Sliced onion","qty":60,"unit":"g"}]'::jsonb,
  ARRAY['Wash and soak 1 cup Basmati rice for 20 min; drain completely.', 'Heat 3 tbsp ghee in a pot; fry 10 cashews and 10 raisins until golden, then remove.', 'In the same ghee, fry 1/2 sliced onion until crispy brown; set aside for garnish.', 'Add the soaked rice to the pot and gently stir for 2 min to coat with ghee.', 'Pour in 2 cups water + 1 tsp salt, bring to a boil, then cover and cook on low heat for 12 min.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000070',
  'Eggplant Masala (Baingan Masala)',
  'Indian Favorites',
  '25 min',
  2,
  '180 kcal',
  '4g',
  '12g',
  '16g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-small-eggplants","name":"Small eggplants","qty":400,"unit":"g"},{"id":"i-onion---tomato","name":"Onion & Tomato","qty":150,"unit":"g"},{"id":"i-ginger-garlic-paste","name":"Ginger-garlic paste","qty":15,"unit":"g"},{"id":"i-peanut-powder","name":"Peanut powder","qty":20,"unit":"g"}]'::jsonb,
  ARRAY['Make a cross-cut on 4 small eggplants; shallow fry in oil until soft, then remove.', 'Sauté 1 chopped onion and 1 tsp ginger-garlic paste until soft.', 'Add 1 chopped tomato, 1 tsp chili powder, and 2 tbsp roasted peanut powder.', 'Pour in 1/2 cup water to create a thick gravy; add the fried eggplants.', 'Cover and simmer on low heat for 8 min until the gravy coats the eggplants.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000071',
  'Aloo Poori',
  'Indian Favorites',
  '30 min',
  2,
  '450 kcal',
  '8g',
  '22g',
  '62g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-wheat-flour","name":"Wheat flour","qty":200,"unit":"g"},{"id":"i-boiled-potatoes","name":"Boiled potatoes","qty":250,"unit":"g"},{"id":"i-tomato---spices","name":"Tomato & Spices","qty":100,"unit":"g"},{"id":"i-oil","name":"Oil","qty":30,"unit":"ml"}]'::jsonb,
  ARRAY['Knead 2 cups wheat flour with water and 1 tsp oil into a stiff dough; roll into small discs and deep-fry to make pooris.', 'For the bhaji, heat 1 tbsp oil and crackle 1 tsp mustard seeds and curry leaves.', 'Sauté 1 chopped tomato with 1/2 tsp turmeric until mushy.', 'Add 3 mashed boiled potatoes, 1.5 cups water, and 1 tsp salt.', 'Boil for 5 min until thick, and serve hot with the fried pooris.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000072',
  'Besan Chilla (Savory Pancakes)',
  'Breakfast',
  '15 min',
  2,
  '220 kcal',
  '9g',
  '8g',
  '28g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-gram-flour--besan-","name":"Gram flour (Besan)","qty":120,"unit":"g"},{"id":"i-onion---tomato","name":"Onion & Tomato","qty":100,"unit":"g"},{"id":"i-ajwain--carom-seeds-","name":"Ajwain (Carom seeds)","qty":3,"unit":"g"},{"id":"i-green-chili---oil","name":"Green chili & oil","qty":15,"unit":"g"}]'::jsonb,
  ARRAY['Mix 1 cup besan, 1/4 cup chopped onion, and 1/4 cup chopped tomato in a bowl.', 'Add 1/2 tsp ajwain, a pinch of turmeric, salt, and chopped green chili.', 'Pour 3/4 cup water gradually and whisk into a smooth, pourable batter.', 'Heat a flat pan and grease with 1 tsp oil.', 'Spread a ladle of batter in a circle; cook for 2 min on each side until golden.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000073',
  'Paneer Bread Pakoda',
  'Indian Favorites',
  '20 min',
  2,
  '350 kcal',
  '12g',
  '20g',
  '30g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-bread-slices","name":"Bread slices","qty":2,"unit":"pcs"},{"id":"i-paneer-block","name":"Paneer block","qty":60,"unit":"g"},{"id":"i-gram-flour--besan-","name":"Gram flour (Besan)","qty":100,"unit":"g"},{"id":"i-ajwain---spices","name":"Ajwain & spices","qty":5,"unit":"g"},{"id":"i-oil","name":"Oil","qty":25,"unit":"ml"}]'::jsonb,
  ARRAY['Make a batter with 1 cup besan, 1/2 tsp ajwain, chili powder, salt, and water.', 'Place a thin slice of paneer seasoned with chaat masala between 2 slices of bread.', 'Cut the sandwich diagonally into triangles.', 'Dip the sandwich triangle into the besan batter, coating it completely.', 'Deep fry in hot oil for 4 min until crispy and golden brown.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000074',
  'Badam Milk (Almond Milk)',
  'Breakfast',
  '15 min',
  2,
  '240 kcal',
  '8g',
  '12g',
  '25g',
  'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-almonds--badam-","name":"Almonds (Badam)","qty":15,"unit":"pcs"},{"id":"i-full-fat-milk","name":"Full-fat milk","qty":600,"unit":"ml"},{"id":"i-sugar","name":"Sugar","qty":45,"unit":"g"},{"id":"i-saffron---cardamom","name":"Saffron & Cardamom","qty":2,"unit":"g"}]'::jsonb,
  ARRAY['Soak 15 almonds in hot water for 30 min, peel them, and grind into a smooth paste.', 'Boil 3 cups full-fat milk in a heavy-bottomed pan.', 'Stir in the almond paste and 3 tbsp sugar; simmer on low heat for 10 min.', 'Add a pinch of saffron strands and 1/4 tsp cardamom powder.', 'Serve either warm or chilled in a glass garnished with sliced almonds.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000075',
  'Suji Halwa (Rava Sheera)',
  'Indian Favorites',
  '20 min',
  2,
  '320 kcal',
  '4g',
  '14g',
  '46g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-semolina--rava-","name":"Semolina (Rava)","qty":100,"unit":"g"},{"id":"i-ghee","name":"Ghee","qty":50,"unit":"ml"},{"id":"i-sugar","name":"Sugar","qty":100,"unit":"g"},{"id":"i-water","name":"Water","qty":300,"unit":"ml"},{"id":"i-cardamom---nuts","name":"Cardamom & nuts","qty":10,"unit":"g"}]'::jsonb,
  ARRAY['Heat 1/4 cup ghee in a pan; roast 1/2 cup rava on low heat until golden and fragrant.', 'Meanwhile, boil 1.5 cups water with 1/2 cup sugar in a separate pot.', 'Slowly pour the hot sugar water into the roasted rava while stirring continuously to avoid lumps.', 'Cook on low heat until the rava absorbs all the water and starts leaving the sides of the pan.', 'Stir in 1/4 tsp cardamom powder and garnish with fried nuts.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000076',
  'Dal Makhani',
  'Indian Favorites',
  '40 min',
  2,
  '340 kcal',
  '14g',
  '20g',
  '32g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-whole-black-lentils--urad-dal-","name":"Whole black lentils (Urad dal)","qty":150,"unit":"g"},{"id":"i-kidney-beans--rajma-","name":"Kidney beans (Rajma)","qty":40,"unit":"g"},{"id":"i-butter","name":"Butter","qty":40,"unit":"g"},{"id":"i-heavy-cream","name":"Heavy cream","qty":60,"unit":"ml"},{"id":"i-tomato-puree","name":"Tomato puree","qty":150,"unit":"g"}]'::jsonb,
  ARRAY['Soak 1 cup black lentils and 1/4 cup kidney beans overnight; pressure cook until completely soft.', 'Heat 3 tbsp butter in a pan; sauté 1 tsp ginger-garlic paste and 1 cup tomato puree.', 'Add the cooked lentils, mashed slightly, along with 1 cup water and 1 tsp salt.', 'Simmer on low heat for 30 min while stirring frequently to get a creamy texture.', 'Stir in 1/4 cup heavy cream and 1 tbsp butter just before turning off the heat.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000077',
  'Mushroom Pulav',
  'Dinner',
  '25 min',
  2,
  '290 kcal',
  '6g',
  '8g',
  '50g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-basmati-rice","name":"Basmati rice","qty":200,"unit":"g"},{"id":"i-sliced-mushrooms","name":"Sliced mushrooms","qty":150,"unit":"g"},{"id":"i-onion---ginger-garlic","name":"Onion & Ginger-garlic","qty":80,"unit":"g"},{"id":"i-ghee","name":"Ghee","qty":20,"unit":"ml"}]'::jsonb,
  ARRAY['Wash and soak 1 cup Basmati rice for 20 min; drain completely.', 'Heat 2 tbsp ghee in a pot; cook 1 sliced onion and 1 tsp ginger-garlic paste until soft.', 'Add 1 cup sliced mushrooms and stir-fry on high heat for 3 min.', 'Stir in 1/2 tsp garam masala, the soaked rice, and 2 cups water.', 'Cover tightly and cook on low heat for 12 min until all liquid is absorbed.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000078',
  'Matar Paneer',
  'Dinner',
  '25 min',
  2,
  '320 kcal',
  '14g',
  '22g',
  '18g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-paneer-cubes","name":"Paneer cubes","qty":200,"unit":"g"},{"id":"i-green-peas--matar-","name":"Green peas (Matar)","qty":120,"unit":"g"},{"id":"i-onion-tomato-cashew-paste","name":"Onion-Tomato-Cashew paste","qty":150,"unit":"g"},{"id":"i-spices","name":"Spices","qty":8,"unit":"g"}]'::jsonb,
  ARRAY['Grind 1 onion and 2 tomatoes with 5 cashews into a smooth paste.', 'Sauté the paste in 1 tbsp oil until it starts leaving the sides of the pan.', 'Add 1/2 tsp turmeric, 1 tsp chili powder, and 1 cup green peas.', 'Pour in 1 cup water and bring to a boil; cook for 5 min until peas are tender.', 'Add 200g paneer cubes and simmer gently for 3 min on low heat.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000079',
  'Kachumber Salad',
  'Lunch',
  '10 min',
  2,
  '60 kcal',
  '2g',
  '0g',
  '12g',
  'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-cucumber","name":"Cucumber","qty":150,"unit":"g"},{"id":"i-tomato","name":"Tomato","qty":150,"unit":"g"},{"id":"i-onion","name":"Onion","qty":80,"unit":"g"},{"id":"i-lemon-juice---spices","name":"Lemon juice & spices","qty":10,"unit":"g"}]'::jsonb,
  ARRAY['Finely dice 1 cucumber, 2 tomatoes, and 1 medium onion into tiny, even pieces.', 'Mix all the diced vegetables together in a large mixing bowl.', 'Squeeze the juice of 1/2 lemon over the vegetables.', 'Sprinkle 1/2 tsp chaat masala and a pinch of salt.', 'Toss well and serve chilled as a crisp, refreshing side dish.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000080',
  'Veg Pakora',
  'Indian Favorites',
  '15 min',
  2,
  '240 kcal',
  '6g',
  '14g',
  '25g',
  'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-mixed-sliced-vegetables","name":"Mixed sliced vegetables","qty":200,"unit":"g"},{"id":"i-gram-flour--besan-","name":"Gram flour (Besan)","qty":100,"unit":"g"},{"id":"i-carom-seeds--ajwain-","name":"Carom seeds (Ajwain)","qty":3,"unit":"g"},{"id":"i-oil","name":"Oil","qty":25,"unit":"ml"}]'::jsonb,
  ARRAY['Thinly slice 1 cup mixed vegetables of your choice and place them in a bowl.', 'Add 1 cup besan, 1/2 tsp carom seeds (ajwain), chili powder, and salt.', 'Sprinkle 1/4 cup water gently to make a thick, tight coating over the veggies.', 'Heat oil in a deep frying pan on medium-high heat.', 'Drop small, webbed clusters of the mixture and fry for 5 min until crisp.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000081',
  'Bread Amleet (Street Style)',
  'Breakfast',
  '10 min',
  2,
  '290 kcal',
  '14g',
  '18g',
  '22g',
  'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-eggs","name":"Eggs","qty":2,"unit":"pcs"},{"id":"i-sliced-bread","name":"Sliced bread","qty":2,"unit":"pcs"},{"id":"i-chopped-onion---green-chili","name":"Chopped onion & green chili","qty":30,"unit":"g"},{"id":"i-butter","name":"Butter","qty":15,"unit":"g"}]'::jsonb,
  ARRAY['Whisk 2 eggs with 2 tbsp chopped onions, green chili, and a pinch of salt.', 'Melt 1 tbsp butter on a wide flat pan and pour the egg mixture evenly.', 'Immediately place 2 slices of bread side-by-side right on top of the wet egg.', 'Flip the entire omelette along with the bread after 1 min of cooking.', 'Fold the overhanging edges of the egg over the bread, toast until golden, and serve.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000082',
  'Kulfi (Traditional Ice Cream)',
  'Indian Favorites',
  '25 min',
  2,
  '280 kcal',
  '7g',
  '14g',
  '34g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-full-fat-milk","name":"Full-fat milk","qty":800,"unit":"ml"},{"id":"i-condensed-milk","name":"Condensed milk","qty":100,"unit":"ml"},{"id":"i-crushed-pistachios","name":"Crushed pistachios","qty":20,"unit":"g"},{"id":"i-cardamom-powder","name":"Cardamom powder","qty":2,"unit":"g"}]'::jsonb,
  ARRAY['Boil 4 cups full-fat milk in a wide pan until it reduces to half its volume.', 'Stir in 1/2 cup condensed milk and simmer on low heat for 5 min.', 'Add 1/4 tsp cardamom powder and 2 tbsp crushed pistachios; let it cool completely.', 'Pour the cooled thick mixture into traditional kulfi molds or small paper cups.', 'Insert a wooden stick and freeze for at least 8 hours until completely set.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;

INSERT INTO public.recipes (id, title, category, time, serves, calories, protein, fat, carbs, image, ingredients, instructions, is_custom, user_id)
VALUES (
  '00000000-0000-0000-0000-000000000083',
  'Jalebi (Instant Style)',
  'Indian Favorites',
  '25 min',
  2,
  '380 kcal',
  '4g',
  '10g',
  '68g',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60',
  '[{"id":"i-all-purpose-flour--maida-","name":"All-purpose flour (Maida)","qty":120,"unit":"g"},{"id":"i-yogurt","name":"Yogurt","qty":30,"unit":"g"},{"id":"i-baking-powder","name":"Baking powder","qty":3,"unit":"g"},{"id":"i-sugar","name":"Sugar","qty":200,"unit":"g"},{"id":"i-water","name":"Water","qty":150,"unit":"ml"}]'::jsonb,
  ARRAY['Mix 1 cup flour, 2 tbsp yogurt, 1/2 tsp baking powder, and water into a smooth, thick batter.', 'Boil 1 cup sugar with 1/2 cup water for 5 min to make a sticky syrup; keep warm.', 'Pour the batter into a squeeze bottle or a zip-lock bag with a small corner cut off.', 'Squeeze out spiral shapes directly into medium-hot oil and fry until crisp on both sides.', 'Drain the hot jalebis and immediately drop them into the warm sugar syrup for 2 min.']::TEXT[],
  FALSE,
  NULL
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  time = EXCLUDED.time,
  serves = EXCLUDED.serves,
  calories = EXCLUDED.calories,
  protein = EXCLUDED.protein,
  fat = EXCLUDED.fat,
  carbs = EXCLUDED.carbs,
  image = EXCLUDED.image,
  ingredients = EXCLUDED.ingredients,
  instructions = EXCLUDED.instructions,
  is_custom = EXCLUDED.is_custom,
  user_id = EXCLUDED.user_id;
