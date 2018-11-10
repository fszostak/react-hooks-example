import React from 'react';

import { Table, Tag, Button } from 'element-react';

import { useReducerList } from './hooks/useReducerList';

export default function CounterHookedComponent(props) {
 
  const [state, dispatch] = useReducerList();

  const columns = [
    {
      type: 'index'
    },
    {
      label: "Name",
      prop: "name",
      width: 180,
      render: function(data){
        return <Tag>{data.name}</Tag>
      }
    },
    {
      label: "Operations",
      render: function(data) {
        return (
          <span>
           <Button type="danger" size="small" onClick={() => dispatch({type:'delete', id: data.id})}>Delete</Button>
          </span>
        )
      }
    }
  ];

  return (
    <>
      <Table
        style={{width: '100%'}}
        columns={columns}
        data={state}
        border={true}
        highlightCurrentRow={true}
        emptyText='Empty'
      />
      <p>
        <Button onClick={() => dispatch({type:'insert', name: 'New item'})}>
          New item  
        </Button>
      </p>
    </>
  );
}