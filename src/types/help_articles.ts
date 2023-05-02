export enum C_activeInAnswers {
	YES = "Yes",
	NO = "No",
}

export default interface HelpArticle {
	body?: string,
	externalArticlePostDate?: string,
	externalArticleUpdateDate?: string,
	landingPageUrl?: string,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	promoted?: boolean,
	shortDescription?: string,
	slug?: string,
	voteCount?: number,
	voteSum?: number,
	name: string,
	c_activeInAnswers?: C_activeInAnswers,
	c_floorType?: string[],
	c_helpArticleCategory?: string[],
	c_homeSize?: string[],
	c_modelName?: string,
	c_modelNumber?: string,
	c_orderOnPage?: string,
	c_partsAirFacet?: string,
	c_partsHairFacet?: string,
	c_partsVacuumFacet?: string,
	c_spareProductType?: string,
	c_spareTypeVacuums?: string,
	c_stockStatusNumerical?: string,
	keywords?: string[],
	id: string,
	timezone?: any,
}
