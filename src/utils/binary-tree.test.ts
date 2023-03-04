import { waitFor } from '@testing-library/react';
import { binaryTree } from './binary-tree';

describe('binaryTree utility tests', () => {
  it('should create a node object with given value', () => {
    const node = binaryTree('value');
    expect(node.data).toEqual('value');
    expect(node.left).toEqual(null);
    expect(node.right).toEqual(null);
  });

  it('should create a left and right node after we called the insert method', () => {
    const node = binaryTree('value');
    expect(node.data).toEqual('value');
    node.insert('leftValue');
    node.insert('rightValue');

    waitFor(() => {
      expect(node.left?.data).toEqual('leftValue');
      expect(node.left?.data).toEqual('rightValue');
    });
  });

  it('should get value as label and left and right node as children with calling toGraph method', () => {
    const node = binaryTree('value');
    expect(node.data).toEqual('value');
    node.insert('leftValue');
    node.insert('rightValue');

    waitFor(() => {
      expect(node.left?.data).toEqual('leftValue');
      expect(node.left?.data).toEqual('rightValue');
    });

    const result = node.toGraph();

    waitFor(() => {
      expect(result.label).toEqual('value');
      expect(result.children[0]?.label).toEqual('leftValue');
      expect(result.children[1]?.label).toEqual('rightValue');
    });
  });
});
