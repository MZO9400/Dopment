import React from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import CSS from './Works.module.css';

const importAll = r => {
    return r.keys().map(r);
};

const ApplicationImages = importAll(
    require.context("../../Images/projects/Applications", false, /\.(png|jpe?g|svg)$/)
);
const DesigningImages = importAll(
    require.context("../../Images/projects/Designing", false, /\.(png|jpe?g|svg)$/)
);
const DigitalMarketingImages = importAll(
    require.context("../../Images/projects/DigitalMarketing", false, /\.(png|jpe?g|svg)$/)
);
const WebsiteImages = importAll(
    require.context("../../Images/projects/Website", false, /\.(png|jpe?g|svg)$/)
);

const WebsiteLinks = [
    'https://www.printurshirts.com/',
    'https://www.markhorvapes.ca/',
    'https://usedcarparts123.com/',
    'https://www.deerparkgraphics.com/',
    'https://tcp.com.pk/',
    'https://maxtek.pk/',
    'http://kazmiz.co/',
    'https://ideasm.com.pk/'
]
const MarketingLinks = [
    'https://www.facebook.com/modek.co/',
    'https://www.facebook.com/dpwraps/',
    'https://www.facebook.com/CenturyTaxServices/',
    'https://www.facebook.com/DeerParkGraphics/',
    'https://www.facebook.com/grilledfoodpk/',
    'https://www.facebook.com/chickenhutpk/',
    'https://www.facebook.com/burgerchikk/',
    'https://www.facebook.com/FiveStarCloth/'
]
const MarketingText = [
    "Modek.co",
    "DP Wraps",
    "Century Tax Service",
    "Deer Park Graphics",
    "Grilled Food Pk",
    "Chicken Hut Pk",
    "Burger Chikk",
    "Five Star Cloth"
]
const WebsiteText = [
    "Print Ur Shirts",
    "Markhor Vapes",
    "Used Car Parts 123",
    "Deer Park Graphics",
    "The Computer Point",
    "Max Tech", "Kazmiz",
    "Idea's"
]
const ApplicationText = [
    "Duaa!",
    "Darzi"
]
let mergeObjectArrs = (Images, Links) => {
    if (Images.length !== Links.length) {
        return;
    }
    let returnObject = [];
    for (let i = 0; i < Images.length; i++) {
        returnObject.push({image: Images[i], link: Links[i]})
    }
    return returnObject;
}
let addTextToObjectArr = (Obj, TextArr) => {
    if (Obj.length !== TextArr.length) {
        return;
    }
    let returnObject = [];
    for (let i = 0; i < Obj.length; i++) {
        returnObject.push({...Obj[i], text: TextArr[i]});
    }
    return returnObject;
}
let addTextToArr = (Arr, TextArr) => {
    if (Arr.length !== TextArr.length) {
        return;
    }
    let returnObject = [];
    for (let i = 0; i < Arr.length; i++) {
        returnObject.push({image: Arr[i], text: TextArr[i]});
    }
    return returnObject;
}
const toImageJSON = (arr) => {
    let returnObject = [];
    for (let i = 0; i < arr.length; i++) {
        returnObject.push({image: arr[i]});
    }
    return returnObject;
}
let MergedWebsite = addTextToObjectArr(mergeObjectArrs(WebsiteImages, WebsiteLinks), WebsiteText);
let MergedMarketing = addTextToObjectArr(mergeObjectArrs(DigitalMarketingImages, MarketingLinks), MarketingText);
let MergedApplication = addTextToArr(ApplicationImages, ApplicationText);
let MergedDesigning = toImageJSON(DesigningImages);
let All = [
    ...MergedWebsite,
    ...MergedMarketing,
    ...MergedApplication,
    ...MergedDesigning
]

class Works extends React.Component {
    state = {
        showCount: 4,
        selected: All
    }

    componentDidUpdate(previousProps, previousState) {
        if (this.props.tab !== previousProps.tab)
            switch (this.props.tab) {
                case "Web":
                    this.setState({selected: MergedWebsite});
                    break;
                case "Ecm":
                    this.setState({selected: MergedMarketing});
                    break;
                case "Agn":
                    this.setState({selected: MergedDesigning});
                    break;
                case "Mbl":
                    this.setState({selected: MergedApplication});
                    break;
                default:
                    this.setState({selected: All});
                    break;
            }
    }

    showMore = () => {
        let {showCount} = this.state;
        showCount = (showCount + 4) >= this.state.selected.length ? this.state.selected.length : showCount + 4;
        this.setState({showCount: showCount});
    }
    allImagesShown = () => this.state.showCount >= this.state.selected.length;

    render() {
        return (
            <div className={CSS.main}>
                <div className={CSS.worksList}>
                    {
                        this.state.selected.slice(0, this.state.showCount).map((item, key) => <ServiceCard {...item} />)
                    }
                </div>
                {!this.allImagesShown() && <button onClick={this.showMore} className={CSS.button}>More</button>}
            </div>
        )
    }
}

export default Works;