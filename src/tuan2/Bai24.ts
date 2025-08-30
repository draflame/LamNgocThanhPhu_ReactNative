
type Product = {
  id?: string;     
  name: string;
  price: number;
  description: string;
};

async function postProduct(product: Product): Promise<Product> {
  const response = await fetch("https://67cd35e2dd7651e464eda65e.mockapi.io/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Product = await response.json();
  return data;
}

async function testPostProduct() {
  try {
    console.log("Đang post sản phẩm...");
    const newProduct = await postProduct({
      name: "Sample Product",
      price: 99.99,
      description: "This is a sample product.",
    });
    console.log("Phản hồi từ API:", newProduct);
  } catch (err) {
    console.error("Lỗi:", (err as Error).message);
  }
}

testPostProduct();
