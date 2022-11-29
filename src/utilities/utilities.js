import axios from 'axios';

export const currencyAPI = async (curr) => {
  try {
    const { data } = await axios.get(
      `https://www.myjsons.com/v/c410490`
    );
    console.log(data);
    let result = data.gbp[curr];
    return result;
  } catch (error) {
    console.log("ERROR!!!!!!!")
  }
};