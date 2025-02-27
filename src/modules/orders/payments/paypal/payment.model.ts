export enum Status {
    "PENDING",
    "CANCELLED",
    "REJECTED",
    "CREATED",
}

export interface Amount {
    currency_code: string;
    value: number;
    breakdown: {
        item_total: {
            currency_code: string;
            value: number;
        },
        shipping?: {
            currency_code: string;
            value: number;
        }
    }
}

export interface Item {
    name?: string,
    description?: string,
    unit_amount?: {
        currency_code: string,
        value: number
    },
    quantity?: number,
    category?: string,
    image_url?: string,
    url?: string,
}

export interface PurchaseUnit {
    reference_id: string;
    amount: Amount;
    items?: Item[];
}

export interface PaymentSource {
    paypal?: {
        experience_context: {
            payment_method_preference: string;
            landing_page: string;
            shipping_preference: string;
            user_action: string;
            return_url: string;
            cancel_url: string;
        }
    }
}

export interface PaymentInterface {
    intent: string;
    payment_source?: PaymentSource;
    purchase_units: PurchaseUnit[];
}