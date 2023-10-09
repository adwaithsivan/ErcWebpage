import styled from '@emotion/styled';
import './chart.css'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Tree, TreeNode } from 'react-organizational-chart';

export default function Chart() {
 const style= styled
  const StyledNode = styled.div`
  padding: 5px;
  
  display: inline-block;
  border: 1px solid black;
`;
  return (
    <div>
    <Container id='chart-container'>
   
    <Tree
    lineWidth={'2px'}
    lineColor={'black'}
    
    label={<StyledNode>Organisation Chart</StyledNode>}
    
  >
    <TreeNode label={<StyledNode>Member (Law)</StyledNode>}>
      <TreeNode label={<StyledNode>Commission <br></br>Secretary</StyledNode>} />
      <TreeNode label={<StyledNode>Consultant <br></br>Legal</StyledNode>}></TreeNode>
      
    </TreeNode>
    
    <TreeNode label={<StyledNode>Chairman</StyledNode>}>
      
      <TreeNode label={<StyledNode>Consultant<br></br> Technical</StyledNode>}></TreeNode>
      <TreeNode label={<StyledNode>Consultant<br></br>Finance & Tariff</StyledNode>}></TreeNode>
      <TreeNode label={<StyledNode>Consultant<br></br> Administration</StyledNode>}></TreeNode>

     
    </TreeNode>
    <TreeNode label={<StyledNode>Member(Technical)</StyledNode>}>
    <TreeNode label={<StyledNode>Consultant<br></br> Engineering</StyledNode>}></TreeNode>
      <TreeNode label={<StyledNode>Consultant <br></br>Public Relation</StyledNode>}></TreeNode>
      
      
      {/* <TreeNode label={<StyledNode>Grand Child 3</StyledNode>} /> */}
    </TreeNode>
  </Tree>
    </Container>
    </div>
  )
}
