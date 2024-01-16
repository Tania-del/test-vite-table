export interface IAccount {
    accountId: number;
    email: string;
    creationDate: string;
    authToken: string;
}

export interface IProfile {
    profileId: number;
    country: string;
    marketplace: string;
}

export interface ICampaign {
    campaignId: number;
    clicks: number;
    cost: number;
    date: string;
}

export interface IData {
    accounts: IAccount[];
    profiles: IProfile[];
    campaigns: ICampaign[];
}