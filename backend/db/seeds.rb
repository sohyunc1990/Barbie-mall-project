# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.create(username:"cymbi", password:"asdf", password_confirmation:"asdf")
User.create(username:"sohyun", password:"asdf", password_confirmation:"asdf")
# Dresses
Product.create(name:"White Wedding Dress", img_url:"https://i.pinimg.com/474x/f9/ed/4e/f9ed4e97f8279be6f9ae7c2439908e87.jpg", price:20000, category:"Dress")
Product.create(name:"Classic Cocktail Dress", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/DGW56_Viewer?$ossmallindex$&storeId=10151&SKU=DGW56", price:500, category:"Dresses")
Product.create(name:"Calico Peasant Dress", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/7755_01?$ossmallindex$&storeId=10151&SKU=7755", price:60, category:"Dresses")
Product.create(name:"Marilyn White Dress", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/17155_01?$ossmallindex$&storeId=10151&SKU=17155", price:700, category:"Dresses")
Product.create(name:"Princess of the Nile", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/53369_01?$ossmallindex$&storeId=10151&SKU=53369", price:450, category:"Dresses")
Product.create(name:"Birthday Wishes", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/DVP51_01?$ossmallindex$&storeId=10151&SKU=DVP51", price:400, category:"Dresses")
Product.create(name:"Cupid's Kisses", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/BCR06_Viewer?$ossmallindex$&storeId=10151&SKU=BCR06", price:250, category:"Dresses")
Product.create(name:"Luciana", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/BDH22_01?$ossmallindex$&storeId=10151&SKU=BDH22", price:250, category:"Dresses")
Product.create(name:"Christabelle", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/K7969_01?$ossmallindex$&storeId=10151&SKU=K7969", price:650, category:"Dresses")
Product.create(name:"Pioneer Shopkeeper", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/14756_01?$ossmallindex$&storeId=10151&SKU=14756", price:290, category:"Dresses")
Product.create(name:"Splash of Silver", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/P4752_01?$ossmallindex$&storeId=10151&SKU=P4752", price:95, category:"Dresses")
Product.create(name:"Dreamtopia", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/FJC97_01?$ossmallindex$&storeId=10151&SKU=FJC97", price:90, category:"Dresses")
Product.create(name:"Marvel Mystique", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/GLJ53_01?$ossmallindex$&storeId=10151&SKU=GLJ53", price:130, category:"Dresses")
Product.create(name:"Midnight Mischief", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/B0148_01?$ossmallindex$&storeId=10151&SKU=B0148", price:160, category:"Dresses")
Product.create(name:"Angel of Joy", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/19633_01?$ossmallindex$&storeId=10151&SKU=19633", price:480, category:"Dresses")
Product.create(name:"Evening Extravaganza", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/11622_01?$ossmallindex$&storeId=10151&SKU=11622", price:530, category:"Dresses")
Product.create(name:"Whispering Wind", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/22834_01?$ossmallindex$&storeId=10151&SKU=22834", price:640, category:"Dresses")
Product.create(name:"Music Festival", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/DGY12_Viewer?$ossmallindex$&storeId=10151&SKU=DGY12", price:80, category:"Dresses")
Product.create(name:"Gone Platinum", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/53868_01?$ossmallindex$&storeId=10151&SKU=53868", price:520, category:"Dresses")
Product.create(name:"Dancing with the Stars", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/W3319_01?$ossmallindex$&storeId=10151&SKU=W3319", price:330, category:"Dresses")
#Tops
Product.create(name:"Hunting Shirt", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/0757_huntingshirt_01?$ossmallindex$&storeId=10151&SKU=0757_huntingshirt", price:35, category:"Tops")
Product.create(name:"Short-Sleeved Shirt", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/0757_shortsleevedshirt_01?$ossmallindex$&storeId=10151&SKU=0757_shortsleevedshirt", price:25, category:"Tops")
Product.create(name:"Sport Shirt", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/0757_sportshirt_01?$ossmallindex$&storeId=10151&SKU=0757_sportshirt", price:20, category:"Tops")
Product.create(name:"Polo Shirt", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/0757_poloshirt_01?$ossmallindex$&storeId=10151&SKU=0757_poloshirt", price:20, category:"Tops")
Product.create(name:"Shirt and Tie", img_url:"https://images.mattel.com/scene7//wcsstore/MattelCAS/0757_shirtandtie_01?$ossmallindex$&storeId=10151&SKU=0757_shirtandtie", price:22, category:"Tops")
Product.create(name:"Mint Cropped Sweatshirt", img_url:"https://i.etsystatic.com/24927982/r/il/66b5d5/2569436113/il_1588xN.2569436113_ptoz.jpg", price:45, category:"Tops")
Product.create(name:"Tops with Graphic", img_url:"https://i.etsystatic.com/8225358/r/il/523390/1684085121/il_1588xN.1684085121_jhbg.jpg", price:18, category:"Tops")
Product.create(name:"Versace T-Shirt", img_url:"https://i.etsystatic.com/8225358/r/il/aff29d/2083256584/il_1588xN.2083256584_s6ub.jpg", price:65, category:"Tops")
#Bottoms
Product.create(name:"Denim Leggings", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPG42WNx46xJHiiEYzNxNdqDmpbr5ky2XVtGPKrufonBCQTzVoPaoVRTMUpO2tp_mAngU8a78&usqp=CAc", price:18, category:"Bottoms")
Product.create(name:"Golden Leggings", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuGw9_mM-a7G2sW5OspzEHv7isM_zpCpFtLdOZVLnc-qRxJDOunDOULaWY7knx9jKUTZKMWbg&usqp=CAc", price:15, category:"Bottoms")
Product.create(name:"Joggers", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFq-pEHM-N6hK8RtoXi6vIdCyevqu5GWeKrA&usqp=CAU", price:12, category:"Bottoms")
Product.create(name:"Striped Pants", img_url:"https://i.ebayimg.com/images/g/CToAAOSwnAJevCyh/s-l300.jpg", price:22, category:"Bottoms")
Product.create(name:"Purple Slax Pants", img_url:"https://www.picclickimg.com/d/l400/pict/193367492162_/Barbie-violet-leggings-Barbie-pants-fashion-doll-clothes.jpg", price:31, category:"Bottoms")
Product.create(name:"Yoga Pants", img_url:"https://i5.walmartimages.com/asr/bc5d98f9-e341-4015-9717-9ada7a6f74b4_1.365a38ffc54253cc59608a65cebdf016.jpeg", price:25, category:"Bottoms")
Product.create(name:"Leopard Yoga Pants", img_url:"https://i.etsystatic.com/8622187/r/il/9c12e7/1916756080/il_1588xN.1916756080_dfmw.jpg", price:23, category:"Bottoms")
Product.create(name:"Trousers", img_url:"https://i.etsystatic.com/9796401/r/il/2c4b23/1343410094/il_1588xN.1343410094_ej5u.jpg", price:38, category:"Bottoms")
Product.create(name:"Shorts", img_url:"https://i.etsystatic.com/9796401/c/1000/794/0/58/il/dd0314/1709867217/il_340x270.1709867217_ern7.jpg", price:12, category:"Bottoms")
#Swim
Product.create(name:"Floral Swimsuit", img_url:"https://i.etsystatic.com/22551660/d/il/dca537/2549285803/il_340x270.2549285803_f9hk.jpg?version=0", price:45, category:"Swim")
Product.create(name:"Blue String Swimsuit", img_url:"https://i.etsystatic.com/22551660/c/1325/1053/0/328/il/5c2410/2503568436/il_340x270.2503568436_57fy.jpg", price:51, category:"Swim")
Product.create(name:"Sexy Swimsuit", img_url:"https://i.etsystatic.com/8225358/r/il/b0b7b1/791836415/il_1588xN.791836415_kork.jpg", price:58, category:"Swim")
Product.create(name:"Pink Flowers Print Swimsuit", img_url:"https://i.etsystatic.com/19776363/r/il/04a59c/2575193361/il_1588xN.2575193361_tu9a.jpg", price:34, category:"Swim")
Product.create(name:"Blue Bikini", img_url:"https://i.etsystatic.com/22551660/r/il/450984/2551040179/il_1588xN.2551040179_mgzz.jpg", price:38, category:"Swim")
