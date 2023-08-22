const mongoose = require("mongoose");

const facturaSchema = mongoose.Schema({
    fechaPedido: {
        type: String,
        required: true
    },
    vendedor: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Factura', facturaSchema);