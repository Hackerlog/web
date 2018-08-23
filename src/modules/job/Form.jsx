import React from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';

import Input from '../../components/Input';

const InputGroup = observer(({ field, type = 'text', placeholder = null, value }) => (
  <div>
    <label htmlFor={field.id}>{field.label}</label>
    <Input type={type} {...field.bind({ placeholder, value })} />
    <small>{field.error}</small>
  </div>
));

const CheckboxGroup = observer(({ field, type = 'text', placeholder = null, value }) => (
  <div>
    <label htmlFor={field.id}>{field.label}</label>
    <input type={type} {...field.bind({ placeholder, value })} />
    <small>{field.error}</small>
  </div>
));

const SelectGroup = observer(({ field, placeholder = null, value }) => (
  <div>
    <label htmlFor={field.id}>{field.label}</label>
    <Select
      {...field.bind({ placeholder, value })}
      options={field.options}
      onChange={field.onChange}
    />
    <small>{field.error}</small>
  </div>
));

const MarkdownGroup = observer(({ field }) => (
  <div>
    <label htmlFor={field.id}>{field.label}</label>
    <small>{field.error}</small>
    <textarea value={field.value} onChange={field.onChange} />
  </div>
));

const JobForm = ({ form }) => (
  <form onSubmit={form.onSubmit}>
    <InputGroup field={form.$('companyName')} />
    <InputGroup field={form.$('position')} />
    <CheckboxGroup field={form.$('isCurrentJob')} />
    <InputGroup field={form.$('startDate')} />
    <InputGroup field={form.$('endDate')} />
    <CheckboxGroup field={form.$('isRemoteJob')} />
    <InputGroup field={form.$('city')} />
    <SelectGroup field={form.$('state')} />
    <MarkdownGroup field={form.$('description')} />
    <button type="submit">Submit</button>
  </form>
);

export default observer(JobForm);
