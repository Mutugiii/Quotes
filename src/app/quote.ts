export class Quote {
    showMore: boolean
    constructor(public uVote: number, public dVote: number, public quotation:string, public author:string, public submitter:string, public submitTime: Date){
        this.showMore = true;
    }
}
