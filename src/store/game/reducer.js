import GAME from './types';

const initialState = {
  mode: {},
  game: {
    userName: '',
    mode: '',
    userScore: 0,
    computerScore: 0,
    delay: 0,
    grid: {
      selected: [],
      list: [],
      map: {},
    },
  },
  isLoading: true,
  error: '',
};

const leaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME.GET_MODE_REQUEST: {
      return { ...initialState };
    }
    case GAME.GET_MODE_SUCCESS: {
      return {
        ...state,
        mode: action.payload.mode,
        isLoading: false,
        error: '',
      };
    }
    case GAME.GET_MODE_FAILURE: {
      return { ...initialState, isLoading: false, error: action.payload.error };
    }

    case GAME.SET_MODE: {
      return { ...state, game: { ...state.game, mode: action.payload } };
    }

    case GAME.SET_USER_NAME: {
      return { ...state, game: { ...state.game, userName: action.payload } };
    }

    case GAME.SET_GRID: {
      return { ...state, game: { ...state.game, grid: action.payload } };
    }

    case GAME.CHECK_GRID_ITEM: {
      return { ...state };
    }

    case GAME.CHECK_COL: {
      const gridCopy = { ...state.game.grid };
      gridCopy.map[action.payload].startInterval = true;
      return { ...state, game: { ...state.game, grid: { ...gridCopy } } };
    }

    case GAME.INCREASE_COMPUTER_POINT: {
      const gridCopy = { ...state.game.grid };
      gridCopy.map[action.payload].startInterval = false;
      gridCopy.map[action.payload].checkedByComputer = true;
      const index = gridCopy.empty.indexOf(action.payload);
      gridCopy.empty.splice(index, 1);
      return {
        ...state,
        game: { ...state.game, computerScore: state.game.computerScore + 1, grid: { ...gridCopy } },
      };
    }

    case GAME.INCREASE_USER_POINT: {
      const gridCopy = { ...state.game.grid };
      gridCopy.map[action.payload].startInterval = false;
      gridCopy.map[action.payload].checkedByUser = true;
      const index = gridCopy.empty.indexOf(action.payload);
      gridCopy.empty.splice(index, 1);
      return {
        ...state,
        game: { ...state.game, userScore: state.game.userScore + 1, grid: { ...gridCopy } },
      };
    }

    case GAME.CLEAR_STATE: {
      return { ...state, game: { ...initialState.game } };
    }

    default: {
      return { ...state };
    }
  }
};

export default leaderReducer;
