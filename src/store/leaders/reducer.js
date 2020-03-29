import LEADERS from './types';

const initialState = {
  leaders: {
    list: [],
    map: {},
  },
  isLoading: true,
  error: '',
};

const leadersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEADERS.GET_REQUEST: {
      return { ...initialState };
    }
    case LEADERS.GET_SUCCESS:
    case LEADERS.SET_WINNER_SUCCESS: {
      const leadersList = [];
      const leadersMap = {};

      action.payload.data.forEach((winner) => {
        leadersList.push(winner.id);
        leadersMap[winner.id] = {
          ...winner,
        };
      });

      return {
        leaders: {
          list: leadersList,
          map: leadersMap,
        },
        isLoading: false,
      };
    }
    case LEADERS.GET_FAILURE:
    case LEADERS.SET_WINNER_FAILURE: {
      return { ...initialState, isLoading: false, error: action.payload.error };
    }

    case LEADERS.SET_WINNER: {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default leadersReducer;
