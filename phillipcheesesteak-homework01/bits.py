class DecodeError(Exception): pass
class ChunkError(Exception): pass
class BitList:
    #Input: (BitList) self, (string) binary string
    #Output: Null
    #Function: Convert binary string -> integer list then assigned to self
    def __init__(self, s): 
        temp = [] #Empty set to append then return
        #Check if the string only contains 1 and 0's and raise valueError if it does not
        for i in s:
            if i != '1' and i != '0':
                raise ValueError('Format is invalid; does not consist of only 0 and 1')
        #Convert all string characters to int then append to integer list
        for i in s:
            temp.append(int(i))
            self.bit = temp
            self.s = s
    
    #Input: (BitList) self, (BitList) Other
    #Output: (Boolean)
    #Function: Compare a bitlist to another
    def __eq__(self, other):
        bit1 = self.bit
        bit2 = other.bit
        #Check if the list compared have same length and return false if not equal
        if len(bit1) == len(bit2):
            #Compare each index and return false if any value is not equal
            for i in range(len(bit1)):
                if bit1[i] != bit2[i]:
                    return False
            return True
        else:
            return False

    #Input: (int*) Binary number in ints
    #Output: (BitList) instance
    #Function: Takes binary number in and changes to BitList Object
    @staticmethod
    def from_ints(*args):
        bitstring = ''
        for i in args:
            if i != 1 and i != 0:
                raise ValueError('Format is invalid; does not consist of only 0 and 1')
        for i in args:
            bitstring += str(i)
        return BitList(bitstring)
    
    #Input: (BitList)
    #Output: (String)
    #Function: Representation of BitList through String
    def __str__(b):
        bits = ''
        for i in b.bit:
            bits += str(i)
        return bits
    
    #Input: (BitList)
    #Output: (BitList)
    #Function: Shift bit to the left
    def arithmetic_shift_left(self):
        length = len(self.bit)
        for i in range(length):
            if i == length - 1:
                self.bit[i] = 0
            else:
                self.bit[i] = self.bit[i+1]
    #Input: (BitList)
    #Output: (BitList)
    #Function: Shift bit to the right
    def arithmetic_shift_right(self):
        for i in range(len(self.bit)-1,-1, -1):
            if i == 0:
                self.bit[i] = self.bit[i+1]
            else:
                self.bit[i] = self.bit[i-1]
                
    #Input: (BitList) self, (BitList) other
    #Output: (BitList)
    #Function: Perform and operation on bit representations
    def bitwise_and(self,other):
        andstring = ''
        if (len(self.bit) == len(other.bit)):
            for i in range(len(self.bit)):
                andstring += str(self.bit[i]*other.bit[i])
            return BitList(andstring)
        else:
            raise ValueError('Format is invalid; bits do not contain same length')
    
    #Input: (BitList) self, (Int) chunk length
    #Output: Array of Int array
    #Function: Chunks BitList to in arrays
    def chunk(self,length):
        olength = len(self.bit)//length
        if length * olength != len(self.bit):
            raise ChunkError
        chunklist = [[0]*length for i in range(olength)]
        k = 0
        for i in range(olength):
            for j in range(length):
                chunklist[i][j] = self.bit[k]
                k += 1
        return chunklist
    
    def decode(self,encoding = 'utf-8'):
        temp = ''
        counter = 0;
        if encoding == 'us-ascii':
            for i in range(len(self.s)//7):
                temp += chr(int(self.s[7*i: 7*i + 7], 2))
            return temp
        if encoding == 'utf-8':
            return 4
        else:
            raise ValueError('Invalid encoding number')