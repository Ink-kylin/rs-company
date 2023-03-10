
## 日程

周一公司例会
周五部门例会

```mermaid
sequenceDiagram
    autonumber
    actor 客户
    actor 物流司机
    participant 闸口
    box 堆场
        participant 磅房
        participant 垛位
        actor 装载司机
    end

    客户 ->>+ 物流司机: 委托申请
    物流司机-->>-客户: 接受委托
    rect rgb(191, 223, 255)
    critical 入卡校验
        物流司机->>+ 闸口: 入卡
        Note over 物流司机,闸口: 一卡一车,验证二维码与车牌
    option 校验通过
        rect rgb(128,255,0)
        闸口->>+ 磅房: 空车过磅
        end
    option 校验失败
        物流司机 --> 物流司机: 原路返回,记录在案
    end
    end

    rect rgb(255,165,0)
    磅房 ->>+ 垛位: 导航至指定货位
    装载司机 ->>+ 垛位: 装载
    垛位 ->>+ 磅房: 过磅
    note over 垛位,磅房: 根据车牌扫描及委托扫码识别,记录过磅补货等信息
    critical 未达标
        磅房 -->>+ 装载司机: 补货申请
        note over 磅房,装载司机: 补货后禁止长时间逗留
        装载司机 -->>+ 垛位: 装载
        垛位 -->>+ 磅房: 二次过磅
        note over 垛位,磅房: 存在补货申请,必然二次过磅
    option 已达标
        磅房 ->>+ 闸口: 出闸审查
        note over 磅房,闸口: 禁止人为开闸,需待审查车辆轨迹及补货过磅
    end
        alt 审查通过
        闸口 ->>+ 客户: 出场
        else 未通过
        闸口 -->>+ 闸口: 预警扣留,通知管理人员
        end

    end
```



## File server

\\192.168.1.22\文件工具

Username: Administrator
Password:Rsxx2018


右: 杨如旋


AM 8:30 - 11:30
PM 1:30 - 6:00