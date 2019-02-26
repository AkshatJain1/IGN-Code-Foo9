import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

public class Witcher {
    public static HashMap<String, Integer> costInventory, valueInventory;
    public static double money = 300;
    public static String separationKey = "separationKey";

    public static void main(String[] args) throws Exception{
        //initialize scanner for reading data
        Scanner kb = new Scanner(new File("inventory.txt"));

      
        costInventory = new HashMap<String, Integer>();
        valueInventory = new HashMap<String, Integer>();

        
        ArrayList<String> helmets = new ArrayList<>();
        ArrayList<String> chests = new ArrayList<>();
        ArrayList<String> boots = new ArrayList<>();
        ArrayList<String> leggings = new ArrayList<>();

        ArrayList<String> total = new ArrayList<>();



        while(kb.hasNextLine()) {
            String armorType = kb.next();
            
            String armorName = "";
            while(!kb.hasNextInt()) {
                armorName += kb.next() + " ";
            }
            armorName = armorName.stripTrailing();

            
            int armorCost = kb.nextInt();
            int armorValue = kb.nextInt();

            costInventory.put(armorName, armorCost);
            valueInventory.put(armorName, armorValue);


            if(armorType.equals("Helmet")) 
                helmets.add(armorName);
            if(armorType.equals("Leggings")) 
                leggings.add(armorName);
            if(armorType.equals("Chest")) 
                chests.add(armorName);
            if(armorType.equals("Boots")) 
                boots.add(armorName);

            total.add(armorName);
        }

        kb.close();

        printAllCases(Arrays.asList(helmets, chests, leggings, boots, total));
    }

    public static void printAllCases(List<List<String>> totalList)
    {
        List<String> result = new ArrayList<String>(totalList.get(0));

        for(int index = 1; index < totalList.size() ; index++)
        {
            result = combineTwoLists(result, totalList.get(index));
        }


        int maxValue = Integer.MIN_VALUE;
        String finalList = "";

        for(String s: result)
        {
            String[] names = s.split(separationKey);

            if(uniqueNames(names)) {
                int totalPrice = costInventory.get(names[0]) + costInventory.get(names[1]) + costInventory.get(names[2]) + costInventory.get(names[3]) + costInventory.get(names[4]);            

                if(totalPrice <= money) {
                    int totalValue = valueInventory.get(names[0]) + valueInventory.get(names[1]) + valueInventory.get(names[2]) + valueInventory.get(names[3]) + valueInventory.get(names[4]);

                    if(totalValue > maxValue) {
                        maxValue = totalValue;
                        finalList = names[0] + "\t" + names[1] + "\t" + names[2] + "\t\t\t" + names[3] + "\t" + names[4] + "\t";
                    }
                }
            }
        }

        System.out.println(finalList);
    }

    private static boolean uniqueNames(String[] names) {

        String allNames = "";
        
        for(int x = 0; x < names.length; x++) {
            if(allNames.contains(names[x]))
                return false;
            allNames += names[x];
        }

        return true;
    }

    private static List<String> combineTwoLists(List<String> list1, List<String>   list2)
    {
        List<String> result = new ArrayList<String>();
        StringBuilder sb = new StringBuilder();
        for(String s1 : list1)
        {
            for(String s2: list2)
            {
                sb.setLength(0);
                sb.append(s1).append(separationKey).append(s2);
                result.add(sb.toString());
            }
        }
        return result;
    }
}
