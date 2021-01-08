import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 3.2rem;
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    display: flex:
    justify-content: space-between;
`;

const WalletWrapper = styled.div`
    height: 100%;
    width: 22rem;
    margin-right: 1.25rem;
    margin-bottom: .15rem;
    border-left: 2px solid  #E8E7E6;
    border-right: 2px solid #E8E7E6;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const UserWallet = styled.div`
    font-size: .7rem;
    margin-left: 1rem;
`;


const Title = styled.div`
    padding-left: 2rem;
`;

const Box = styled.div`
    font-size: .8rem;
    height: 1.3rem;
    width: 3.5rem;
    background-color: #E8E7E6;
    display: flex;
    justify-content: center;
`;

const BoxText = styled.span`
    flex-direction: row;
    align-self: center;
`;

const Arrow = styled.div`
    margin-right: 1rem;
    margin-left: 1.6rem;
`;

const Div = styled.div`
    display: flex;
`;
                

export default function Header() {

    let walletName : string = 'MetaMask'
    let address : string = '0xfaa7...373B'
    let network : string = 'Mainnet'

    return (
        <Wrapper>
            <Container>
                <Title>Multisig Wallet</Title>
            </Container>
            <WalletWrapper>
                <UserWallet>
                    { walletName }
                    <br/>
                    { address }
                </UserWallet>
                <Div>
                <Box>
                    <BoxText>
                        { network }
                    </BoxText>
                </Box>
                <Arrow>
                    &#709;
                </Arrow>
                </Div>
            </WalletWrapper>
        </Wrapper>
    )
}