const todoListData = [
  {
    id: 1,
    content: "Khóa học lập trình free tại ThanhBoyBoyBoy",
  },
  {
    id: 2,
    content: "Java ngôn ngữ lập trình hướng đối tượng OOP 1tr2 VND",
  },
  {
    id: 3,
    content: "Python từ cơ bản tới nâng cao 2tr3 VND",
  },
  {
    id: 4,
    content:
      "JavaScript con đường dẫn tới master front-end Developer trị giá 3tr",
  },
  {
    id: 5,
    content: "Cách viết CV đẹp show cho nhà tuyển dụng free",
  },
  {
    id: 6,
    content: "C++ cho những người mất gốc từ 0 cho đến hero",
  },
  {
    id: 7,
    content: "Database cơ bản",
  },
  {
    id: 8,
    content: "PHP laravel, PHP famework pro",
  },
  {
    id: 9,
    content: "Nodejs từ cơ bản tới nâng cao tại Unitop & project thực tế",
  },
  {
    id: 10,
    content:
      "JavaScript con đường dẫn tới master front-end Developer trị giá 3tr",
  },
  {
    id: 11,
    content: "Back-end Developer tại CST",
  },
  {
    id: 12,
    content: "JJava ngôn ngữ lập trình hướng đối tượng OOP 1tr2 VND",
  },
];
export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(todoListData);
    }, 2000);
  });
};
