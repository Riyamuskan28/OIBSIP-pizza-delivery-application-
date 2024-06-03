const pizzas = [
    {
      name: "Margherita",
      varients: ["Small", "Medium", "Large"],
      prices: [
        {
          Small: 99,
          Medium: 199,
          Large: 399,
        },
      ],
      category: "veg",
      image: "/images/margherita.jpg",
      description: "Classic delight with 100% real mozzarella cheese",
    },
    {
      name: "Farmhouse",
      varients: ["Small", "Medium", "Large"],
      prices: [
        {
          Small: 229,
          Medium: 399,
          Large: 599,
        },
      ],
      category: "veg",
      image: "/images/farmhouse.jpg",
      description:
        "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    },
    {
      name: "Veggie Paradise",
      varients: ["Small", "Medium", "Large"],
      prices: [
        {
          Small: 180,
          Medium: 290,
          Large: 460,
        },
      ],
      category: "veg",
      description:
        "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
      image: "/images/veggie paradise.jpg",
    },
    {
      name: "Chicken Golden Delight",
      varients: ["Small", "Medium", "Large"],
      prices: [
        {
          Small: 249,
          Medium: 349,
          Large: 599,
        },
      ],
      category: "nonveg",
      image: "/images/chicken golden delight.jpg",
      description:
        "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
    },
    {
      name: "Chicken Pepperoni",
      varients: ["Small", "Medium", "Large"],
      prices: [
        {
          Small: 320,
          Medium: 580,
          Large: 800,
        },
      ],
      category: "nonveg",
      image: "/images/chicken pepperoni.jpg",
      description:
        "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    },
    {
      name: "Authentic Itelian",
      varients: ["Small", "Medium", "Large"],
      prices: [
        {
          Small: 250,
          Medium: 380,
          Large: 500,
        },
      ],
      category: "nonveg",
      image: "/images/authentic itelian.jpg",
      description:
        "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    },
  ];
  module.exports = pizzas;