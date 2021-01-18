import { Grid, Select } from '@chakra-ui/react';

const Selects = ({ region, vendor, item }) => {
  const data = {
    region: {
      one: 'one',
      two: 'two',
      three: 'three'
    }
  };

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Select placeholder={region}>
          <option value="option1">{data.region.one}</option>
          <option value="option2">{data.region.two}</option>
          <option value="option3">{data.region.three}</option>
        </Select>

        <Select placeholder={vendor}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Select placeholder={item}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Grid>
    </>
  );
};

export default Selects;
