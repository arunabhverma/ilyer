import * as Storage from './storage';

const saveSession =  async (data) => {
  await Promise.all([
    Storage.save(Storage.LOGIN, JSON.stringify( data )),
  ]);
  return  data;
};

export default saveSession;
