// const是創建物件
const coffee = {
  coffeeBeans: 10, // 咖啡豆 10 包
  coffee: 3, // 咖啡 3 杯
  revenue: 1000, // 營業資金 1000 元
};


// interface用來定義物件(不能賦予類型) 較符合OOP
interface CoffeeShopInterface {
    id: number,
    address: string
}


// 優勢
// 可以重複命名
interface CoffeeShopInterface {
    coffeeBeans: number,
    coffee: number
}

const coffeeShopB:CoffeeShopInterface = {
    id: 10,
    address: "USA",
    coffeeBeans: 5,
    coffee: 1000
}
// 可以繼承
interface CoffeeShopBInterface extends CoffeeShopInterface {
    time: string | number
}

const coffeeShopC:CoffeeShopBInterface = {
    id: 10,
    address: "USA",
    coffeeBeans: 5,
    coffee: 1000,
    time:10
}


// type用來定義物件 (1)
type CoffeeShopType = {
    coffeeBeans: number,
    coffee: number,
    revenue: number,
};

const coffeeShopA:CoffeeShopType = {
    coffeeBeans: 10,
    coffee: 3,
    revenue: 1000,
}


// type用來賦予類型 (2)
type ID = string | number;

const cardIdA:ID = "123"
const cardIdB:ID = 123; 



