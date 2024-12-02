const menuItems = [
  {
    name: "Craft Beers",
    description: "Rotating local favorites.",
  },
  {
    name: "High School Spirit",
    description: "Whiskey, ginger ale, lemon.",
  },
  {
    name: "The Homecoming",
    description: "Rum, pineapple, mint.",
  },
  {
    name: "Pretzel Bites with Beer Cheese",
    description: "A classic snack with a cheesy twist.",
  },
  {
    name: "Loaded Nachos",
    description: "Piled high with cheese, jalapeños, and more.",
  },
  {
    name: "Walking Biscuits and Gravy",
    description: 'A hearty, portable take on a comfort food classic, created by "Nuts," one of the owner’s moms.',
  },
];

function displayMenu() {
  const menuContainer = document.getElementById("menu-items");
  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
    menuItem.style.marginBottom = "20px";
    menuContainer.appendChild(menuItem);
  });
}

document.addEventListener("DOMContentLoaded", displayMenu);
