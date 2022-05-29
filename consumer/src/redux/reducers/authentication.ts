import EnumReduxStateStatus from 'enumeration/ReduxStateStatus';
// import EnumStatusIResponse from 'enumeration/StatusIResponse';
import { IAuthenticationInitialState } from 'interface/IReduxState';

const loginFulfilledReducer = (state: IAuthenticationInitialState, action: any) => {
  state.loading = false;
  state.status = EnumReduxStateStatus.DONE;
  state.data = action.payload;
  // state.isAuthenticated = state.data?.processedData.status === EnumStatusIResponse.SUCCESS;
};

const loginRejectedReducer = (state: IAuthenticationInitialState, action: any) => {
  state.loading = false;
  state.status = EnumReduxStateStatus.REJECTED;
  state.data = null;
};

const loginPendingReducer = (state: IAuthenticationInitialState) => {
  state.loading = true;
  state.status = EnumReduxStateStatus.PENDING;
};

const updateAuthenticationReducer = (state: IAuthenticationInitialState, action: any) => {
  state.isAuthenticated = action.payload;
};

const authenticationActions = { loginFulfilledReducer, loginRejectedReducer, loginPendingReducer, updateAuthenticationReducer };
export default authenticationActions;
