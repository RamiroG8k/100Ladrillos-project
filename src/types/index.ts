type Rule = {
    customRegex: RegExp;
    name: string;
    negative?: boolean;
}

type SignUpBody = {
    email: string;
    password: string;
};

type PhoneBody = {
    number: string;
};

type VerifyBody = {
    token: string;
};

type ProfileBody = {
    name: string;
    secondName: string;
    firstLastName: string;
    secondLastName: string;
};

type IProfile = {
    id: string;
    clientNumber: string;
    completed: boolean;
    email: string;
    name: string;
    firstLastName: string;
    phone: {
        number: string;
        verified: boolean;
    }
};

export type { Rule, SignUpBody, PhoneBody, VerifyBody, ProfileBody, IProfile };