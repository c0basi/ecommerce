import React from 'react';
import './FeaturedInfo.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FeaturedInfo = () => {
	return (
		<div className="features">
			<div className="features--item">
				<div className="features--item__title">Revenue</div>
				<div className="features--item__moneyContainer">
					<span className="featuresMoney">$2000</span>
					<span className="featuresMoneyRate">
						-11.4
						<ArrowDropDownIcon className="arrowIcon negative" />
					</span>
				</div>
				<span>comapred to last month</span>
			</div>
			<div className="features--item">
				<div className="features--item__title">Sales</div>
				<div className="features--item__moneyContainer">
					<span className="featuresMoney">$2000</span>
					<span className="featuresMoneyRate">
						+11.4
						<ArrowDropUpIcon className="arrowIcon positive" />
					</span>
				</div>
				<span>comapred to last month</span>
			</div>
			<div className="features--item">
				<div className="features--item__title">Cost</div>
				<div className="features--item__moneyContainer">
					<span className="featuresMoney">$2000</span>
					<span className="featuresMoneyRate">
						-11.4
						<ArrowDropDownIcon className="arrowIcon" />
					</span>
				</div>
				<span>comapred to last month</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
