function buildStripeLineItems(orderItems) {
    return orderItems.map(item => {
        const unitAmount = Math.round(Number(item.price) * 100);
        const stripeImages =
            typeof item.image === 'string' && /^https?:\/\//i.test(item.image) ? [item.image] : [];

        return {
            quantity: 1,
            price_data: {
                currency: 'usd',
                unit_amount: unitAmount,
                product_data: {
                    name: `${item.name} (${item.size})`,
                    images: stripeImages,
                    metadata: {
                        productId: String(item.productId),
                        variantId: String(item.variantId),
                        size: item.size
                    }
                }
            }
        }
    })
}

module.exports = { buildStripeLineItems }