import ColaGenerator from "./components/colaGenerator.js";
import Vendingmachine from "./components/vending_machine.js";

const colaGenerator = new ColaGenerator();
const vendingmachine=new Vendingmachine();


//top레벨에서 작동하지 않음 그래서 꼭 async 함수를 만들어야 함.그런데 그럴 필요가 없는걸로 바뀜. 다만 실행하는 함수가 async함수여야 하는것은 여전하다

await colaGenerator.setup();
vendingmachine.setup();