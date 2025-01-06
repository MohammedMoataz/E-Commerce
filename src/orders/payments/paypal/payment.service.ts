import "dotenv/config"
import { Injectable } from '@nestjs/common';

import { PayPalInterface } from "./payment.model";

@Injectable()
export class PaymentService {
    private paypalModel: PayPalInterface;
    private readonly baseUrl = process.env.PAYPAL_BASE_URL

    private async generateToken(): Promise<any> {
        const url = this.baseUrl + '/v1/oauth2/token';
        const clientId = process.env.PAYPAL_CLIENT_ID;
        const secret = process.env.PAYPAL_SECRET;
        const credentials = btoa(`${clientId}:${secret}`);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${credentials}`
            },
            body: new URLSearchParams({ grant_type: "client_credentials" })
        };
        return await fetch(url, options)
            .then(response => response.json());
    }

    async checkoutOrder(): Promise<any> {
        const token = await this.generateToken()
            .then(res => res.access_token);
        const url = this.baseUrl + '/v2/checkout/orders';
        this.paypalModel = {
            intent: "CAPTURE",
            paymentSource: {
                paypal: {
                    experience_context: {
                        cancel_url: "http://localhost:4000/cancel_url",
                        return_url: "http://localhost:4000/return_url",
                        landing_page: "LOGIN",
                        payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
                        shipping_preference: "NO_SHIPPING",
                        user_action: "PAY_NOW"
                    }
                }
            },
            purchaseUnits: [{
                invoice_id: "8r4ef5d1c2x0",
                items: [{
                    name: "Shoes",
                    description: "Running shoes",
                    unit_amount: {
                        currency_code: "USD",
                        value: 100.00
                    },
                    quantity: 1,
                    category: "category",
                    image_url: "",
                    url: ""
                }],
                amount: {
                    currency_code: "USD",
                    value: 100.00,
                },
            }],
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(this.paypalModel)
        }

        return await fetch(url, options)
            .then(response => response.json())
    }
}
