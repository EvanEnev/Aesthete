module.exports = {
  name: 'config',
  run: async (interaction) => {
    const value = interaction.options.getFocused();
    const defaultValues = [
      'kill',
      'hug',
      'pat',
      'test',
      'anothertest',
      'moretests',
      'porta',
      'portal2',
      'half',
      'half-life3',
      'testsadkjhd',
      'sjdhksd',
      'khsgdjhsgd',
      'kjsdgkjsgdkjshdkjhasdluadpfou',
      'otieygljdgkhsgf',
      'djfgkushdf',
      'dksfgjhsdgf',
      'dkjfgkjdgsfuhasf',
      'oiweyrilhwerj',
      'dsfoiywouieryu',
      'rwutpoiwrtpoiwet',
      'addnkjdfhkjsdhf',
      'iqroiiqerowpeori',
      'hsdkjfhsiodfuopweer',
      'poqurpoiwer',
      'oieqiuruiouer',
    ];
    let filtredValues = [];
    defaultValues.forEach((action) => {
      filtredValues.push({ name: action, value: action });
    });
    let values = [];

    let index = 0;
    for (let i = 0; i < 25; i++) {
      if (filtredValues[i]?.name.includes(value)) {
        values.push(filtredValues[i]);
        index++;
      }
    }

    if (!values.length) {
      for (let i = 0; i < 25; i++) {
        values.push(filtredValues[i]);
      }
    }

    interaction.respond(values);
  },
};
