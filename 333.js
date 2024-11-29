// 购物车数据
let cart = [];
let totalPrice = 0;

// 添加到购物车功能
function addToCart(product, basePrice, bulkPrice, bulkThreshold, inputId) {
    const quantityInput = document.getElementById(inputId);
    const quantity = parseInt(quantityInput.value) || 0;
    let pricePerUnit = basePrice;

    // 检查是否达到批发价格条件
    if (quantity >= bulkThreshold) {
        pricePerUnit = bulkPrice;
    }

    // 添加商品到购物车
    cart.push({ product, quantity, pricePerUnit });
    totalPrice += quantity * pricePerUnit;
    updateCart();
}

// 更新购物车显示
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // 清空购物车显示
    cartItems.innerHTML = '';

    // 显示购物车中的商品
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - 数量: ${item.quantity} - 单价: ¥${item.pricePerUnit.toFixed(2)} - 小计: ¥${(item.pricePerUnit * item.quantity).toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // 更新总价
    totalPriceElement.textContent = `¥${totalPrice.toFixed(2)}`;
}

// 清空购物车
function clearCart() {
    cart = [];
    totalPrice = 0;
    updateCart();
}

// 结算
function checkout() {
    if (cart.length === 0) {
        alert('您的购物车为空！');
    } else {
        alert(`结算成功，总价为 ¥${totalPrice.toFixed(2)}。感谢您的购买！`);
        clearCart();
    }
}
