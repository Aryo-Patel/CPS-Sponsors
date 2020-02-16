let information1 = {"isDonor":"true", "password":'broomhandle', "interests":['Athletics', 'STEM', "Coding"], "location":"Wilmette", };
let information2 = {"isDonor":"true", "password":'bigboy', "interests":['Cookies', 'Machine Learning', "Coding"], "location":"Wilmette", };
let information3 = {"isDonor":"true", "password":'boy', "interests":['Laptops', 'Grappling', "Bro"], "location":"Wilmette", };
let information4 = {"isDonor":"false", "password":'broomhandle', "interests":['Athletics', 'Art', "Coding"], "location":"Wilmette", };
let information5 = {"isDonor":"false", "password":"grenville", "interests":['Athletics', 'STEM', "Coding"], "location":"Wilmette",}
localStorage.setItem("IBM", JSON.stringify(information1));
localStorage.setItem("Apple", JSON.stringify(information2));
localStorage.setItem("McDonalds", JSON.stringify(information3));
localStorage.setItem("Culvers", JSON.stringify(information4));
localStorage.setItem("fennelmaster", JSON.stringify(information5));
