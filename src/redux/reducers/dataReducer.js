import {
	ERRORS,
	LOADING,
	QUESTIONS_LIST,
	WINNERS_LIST,
	THEME,
	CURRENT_USER,
	TOTAL_CALLERS,
	TOTAL_CALLERS_TODAY,
	TOTAL_UNIQUE,
	TOTAL_UNIQUE_TODAY,
	PROGRESS,
	PROGRESS2,
	Get_ALLCALLERS_BYDATE,
	NULL,
	NO_ALLCALLERS_BYDATE,
	PUSH_QUESTION,
	PUSH_WINNER,
	GENERATE_LIST,
	GENERATE_LIST_CLEAN,
	GENERATE_ERROR,
	WINNERS_PROGRESS,
	WINNERS_PROGRESS2,
	ELIGIBLE_PROGRESS,
	ELIGIBLE_PROGRESS2,
	GET_ELIGIBLE_WINNERS,
	NO_ELIGIBLE_WINNERS,
	REMOVE_ELIGIBLE_WINNERS,
	TODO,
	GENERATE,
	GENERATE_FOR_OLD_DATE,
} from "../types";

const initialState = {
	todo: [],
	questionsList: [],
	winnersList: [],

	loading: false,
	errors: "",

	theme: false,
	currentUser: false,

	totalCallers: "",
	totalUnique: "",
	totalCallersToday: "",
	totalUniqueToday: "",

	progress: false,
	progress2: false,
	getAllCallersByDate: [],
	noAllCallersByDate: false,

	generate: true,
	generateForOldDate: false,
	generateError: "",
	generatedList: [],
	winnersprogress: false,
	winnersprogress2: false,

	eligibleprogress: false,
	eligibleprogress2: false,
	getEligibleWinners: {},
	noEligibleWinners: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case QUESTIONS_LIST:
			return {
				...state,
				questionsList: action.payload,
			};
		case PUSH_QUESTION:
			return {
				...state,
				questionsList: [...state.questionsList, action.payload],
			};

		case WINNERS_LIST:
			return {
				...state,
				winnersList: action.payload,
			};
		case PUSH_WINNER:
			return {
				...state,
				winnersList: [...state.winnersList, action.payload],
			};
		case LOADING:
			return {
				...state,
				loading: action.payload,
			};

		case THEME:
			return {
				...state,
				theme: action.payload,
			};

		case CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};

		case TOTAL_CALLERS:
			return {
				...state,
				totalCallers: action.payload,
			};
		case TOTAL_UNIQUE:
			return {
				...state,
				totalUnique: action.payload,
			};
		case TOTAL_CALLERS_TODAY:
			return {
				...state,
				totalCallersToday: action.payload,
			};
		case TOTAL_UNIQUE_TODAY:
			return {
				...state,
				totalUniqueToday: action.payload,
			};

		case Get_ALLCALLERS_BYDATE:
			return {
				...state,
				getAllCallersByDate: action.payload,
			};

		case PROGRESS:
			return {
				...state,
				progress: action.payload,
			};

		case PROGRESS2:
			return {
				...state,
				progress2: action.payload,
			};

		case NO_ALLCALLERS_BYDATE:
			return {
				...state,
				noAllCallersByDate: action.payload,
			};

		case NULL:
			return {
				...state,
				getAllCallersByDate: action.payload,
			};

		case WINNERS_PROGRESS:
			return {
				...state,
				winnersprogress: action.payload,
			};

		case WINNERS_PROGRESS2:
			return {
				...state,
				winnersprogress2: action.payload,
			};

		case GENERATE_ERROR:
			return {
				...state,
				generateError: action.payload,
			};

		case GENERATE_LIST:
			return {
				...state,
				generatedList: action.payload,
			};

		case GENERATE_LIST_CLEAN:
			return {
				...state,
				generatedList: action.payload,
			};

		case GENERATE:
			return {
				...state,
				generate: action.payload,
			};

		case GENERATE_FOR_OLD_DATE:
			return {
				...state,
				generateForOldDate: action.payload,
			};

		case GET_ELIGIBLE_WINNERS:
			return {
				...state,
				getEligibleWinners: action.payload,
			};

		case ELIGIBLE_PROGRESS:
			return {
				...state,
				eligibleprogress: action.payload,
			};

		case ELIGIBLE_PROGRESS2:
			return {
				...state,
				eligibleprogress2: action.payload,
			};

		case NO_ELIGIBLE_WINNERS:
			return {
				...state,
				noEligibleWinners: action.payload,
			};

		case REMOVE_ELIGIBLE_WINNERS:
			return {
				...state,
				getEligibleWinners: action.payload,
			};
		case ERRORS:
			return {
				...state,
				errors: action.payload,
			};

		case TODO:
			return {
				...state,
				todo: action.payload,
			};

		default:
			return state;
	}
}
