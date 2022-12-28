import React from 'react';
import { Form } from 'antd';

import ContentTitle from '@minology/components/ContentTitle';
import Card from '@minology/components/Card';
import Input from '@minology/components/Input';
import Select from '@minology/components/Select';
import Button from '@minology/components/Button';
import Switch from '@minology/components/Switch';
import Checkbox from '@minology/components/Checkbox';
import Radio from '@minology/components/Radio';

const options = [
  {
    value: 1,
    label: 'Administrator',
  },
  {
    value: 2,
    label: 'Staff',
  },
  {
    value: 3,
    label: 'Operator',
  },
  {
    value: 4,
    label: 'Finance',
  },
];

const FormPage = () => {
  const [gender, setGender] = React.useState(0);
  return (
    <div>
      <ContentTitle>Form Example</ContentTitle>
      <Card>
        <Form layout="vertical">
          <Form.Item label="Name" name="firstName">
            <Input
              label="Name"
              name="firstName"
              placeholder="Put your name..."
            />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input
              label="Email"
              name="email"
              placeholder="Put your email..."
              error={{ message: 'Please fill this' }}
            />
          </Form.Item>
          <Form.Item label="Directly verified" name="verified">
            <Switch />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Radio.Group
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Do you agree?" name="agreed">
            <Checkbox>Yes, I'm agree.</Checkbox>
          </Form.Item>
          <Form.Item label="Role" name="roleId">
            <Select
              placeholder="select role..."
              error={{ message: 'Please select role' }}
              options={options}
            />
          </Form.Item>
          <Button>Submit</Button>
        </Form>
      </Card>
    </div>
  );
};

export default FormPage;
