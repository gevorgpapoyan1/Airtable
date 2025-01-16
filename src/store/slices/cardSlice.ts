import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

interface CardState {
  cardDetails: Card[];
  loading: boolean;
  error: string | null;
}

const initialState: CardState = {
  cardDetails: [],
  loading: false,
  error: null,
};

const fetchCardDetails = async (): Promise<Card[]> => {
  return [
    { balance: '$5,756', cardHolder: 'Eddy Cusuma', validThru: '12/22', cardNumber: '3778145617781234' },
    { balance: '$4,500', cardHolder: 'Eddy Cusuma', validThru: '10/24', cardNumber: '3778200025691234' },
  ];
};

export const loadCardDetails = createAsyncThunk<Card[], void>('card', async () => {
  return fetchCardDetails();
});

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(loadCardDetails.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(loadCardDetails.fulfilled, (state: any, action: PayloadAction<Card[]>) => {
        state.loading = false;
        state.cardDetails = action.payload;
      })
      .addCase(loadCardDetails.rejected, (state: any, action: PayloadAction<{ error: string }>) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default cardSlice.reducer;
