"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function postProduct(product) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://67cd35e2dd7651e464eda65e.mockapi.io/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = yield response.json();
        return data;
    });
}
function testPostProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Đang post sản phẩm...");
            const newProduct = yield postProduct({
                name: "Sample Product",
                price: 99.99,
                description: "This is a sample product.",
            });
            console.log("Phản hồi từ API:", newProduct);
        }
        catch (err) {
            console.error("Lỗi:", err.message);
        }
    });
}
testPostProduct();
//# sourceMappingURL=Bai24.js.map